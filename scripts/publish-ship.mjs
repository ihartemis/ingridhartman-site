#!/usr/bin/env node
/**
 * Publish ship-log entries from the vault to this site.
 *
 *   node scripts/publish-ship.mjs <vault .md path> [...more]   publish specific entries
 *   node scripts/publish-ship.mjs --unpublished                 publish every vault entry not yet on the site
 *   node scripts/publish-ship.mjs --all                         re-publish everything (vault wins)
 *   add --commit to git add + commit + push the result
 *   add --dry to print what would happen
 *
 * Vault layout:  ~/vaults/LIFEVAULT/ship-log/YYYY-MM-DD/YYYY-MM-DD-slug.md (+ images beside it)
 * Site layout:   src/content/ships/YYYY-MM-DD-slug.md  +  src/content/ships/YYYY-MM-DD-slug/{thumbnail,before,after}.png
 *
 * What it does per entry:
 *   - strips everything under "## Behind the build (vault only)" and "## Drafting notes…" (never published)
 *   - strips an empty "## Commentary" section (Ingrid's; published only when she wrote something)
 *   - skips drafts (frontmatter `draft: true` or a PLACEHOLDER DRAFT comment)
 *   - strips HTML comments (draft scaffolding)
 *   - maps images by filename suffix: "* thumbnail.*" → thumbnail, "* starting.*" → before, "* ending.*" → after
 *   - rewrites frontmatter image paths to the canonical site paths
 *   - refuses to write if the vault-only heading would survive
 */
import { execSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { basename, dirname, extname, join, resolve } from 'node:path'

const VAULT = process.env.SHIP_LOG_DIR ?? resolve(homedir(), 'vaults/LIFEVAULT/ship-log')
const SITE = resolve(process.cwd(), 'src/content/ships')
const VAULT_ONLY_HEADING = /^##\s+Behind the build \(vault only\)\s*$/im
// Any of these headings and everything under them stay in the vault.
const NEVER_PUBLISH_HEADING = /^##\s+(Behind the build \(vault only\)|Drafting notes.*|.*\(delete before publishing\).*)\s*$/i

const args = process.argv.slice(2)
const flags = new Set(args.filter((a) => a.startsWith('--')))
const paths = args.filter((a) => !a.startsWith('--'))
const dry = flags.has('--dry')

const listVaultEntries = () => {
  const out = []
  for (const d of readdirSync(VAULT)) {
    const dir = join(VAULT, d)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || !statSync(dir).isDirectory()) continue
    for (const f of readdirSync(dir)) if (/\.mdx?$/.test(f) && !f.startsWith('_')) out.push(join(dir, f))
  }
  return out.sort()
}

const splitFrontmatter = (md) => {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error('no frontmatter')
  return { fm: m[1], body: m[2] }
}

const stripSection = (body, headingRe) => {
  // Remove from the matching "## " heading up to the next "## " heading (or EOF).
  const lines = body.split('\n')
  const out = []
  let skipping = false
  for (const line of lines) {
    if (/^##\s/.test(line)) skipping = headingRe.test(line)
    if (!skipping) out.push(line)
  }
  return out.join('\n')
}

const stripEmptySection = (body, headingRe) => {
  const lines = body.split('\n')
  const idx = lines.findIndex((l) => headingRe.test(l))
  if (idx === -1) return body
  let end = lines.length
  for (let i = idx + 1; i < lines.length; i++) if (/^##\s/.test(lines[i])) { end = i; break }
  const content = lines.slice(idx + 1, end).join('\n').replace(/<!--[\s\S]*?-->/g, '').replace(/^\(.*\)\s*$/m, '').trim()
  if (content) return body
  return [...lines.slice(0, idx), ...lines.slice(end)].join('\n')
}

const ROLE_BY_SUFFIX = [
  [/ thumbnail\.(png|jpe?g|webp|gif)$/i, 'thumbnail'],
  [/ starting\.(png|jpe?g|webp|gif)$/i, 'before'],
  [/ ending\.(png|jpe?g|webp|gif)$/i, 'after'],
]

// A draft is: `draft: true`, a scaffold comment aimed at Ingrid, or a body with no real prose once comments go.
const isDraft = (src) => {
  if (/^draft:\s*true\s*$/m.test(src)) return true
  if (/PLACEHOLDER DRAFT|your voice|HOOK PARAGRAPH|HOOK —/i.test(src)) return true
  const body = src.replace(/^---\n[\s\S]*?\n---\n?/, '').replace(/<!--[\s\S]*?-->/g, '')
  const prose = body.split('\n').filter((l) => l.trim() && !/^#/.test(l.trim())).join(' ').trim()
  return prose.length < 40
}

const publishOne = (vaultPath) => {
  const slug = basename(vaultPath).replace(/\.mdx?$/, '')
  const ext = extname(vaultPath)
  const src = readFileSync(vaultPath, 'utf8')
  if (isDraft(src)) {
    console.log(`skipped    ${slug} (draft)`)
    return false
  }
  const { fm, body: rawBody } = splitFrontmatter(src)

  let body = stripSection(rawBody, NEVER_PUBLISH_HEADING)
  body = stripEmptySection(body, /^##\s+Commentary\s*$/i)
  body = body.replace(/<!--[\s\S]*?-->\n?/g, '').replace(/\n{3,}/g, '\n\n').trim()
  body = body.replace(/(\n+---\s*)+$/, '').trim() + '\n' // no dangling rule left behind by a stripped section
  if (VAULT_ONLY_HEADING.test(body)) throw new Error(`${slug}: vault-only section survived the strip`)

  // Images: resolve from frontmatter paths first, then by suffix in the folder.
  const dir = dirname(vaultPath)
  const images = {}
  for (const role of ['thumbnail', 'before', 'after']) {
    const m = fm.match(new RegExp(`^${role}:\\s*(.+?)\\s*$`, 'm'))
    if (m && m[1] && !/^\.\/[\w-]+\/(thumbnail|before|after)\./.test(m[1])) {
      const p = resolve(dir, m[1].replace(/^["']|["']$/g, ''))
      if (existsSync(p)) images[role] = p
    }
  }
  // Suffix scan only when this entry has the folder to itself (folders can hold two same-day ships).
  const siblings = readdirSync(dir).filter((f) => /\.mdx?$/.test(f))
  if (siblings.length === 1) {
    for (const f of readdirSync(dir)) {
      for (const [re, role] of ROLE_BY_SUFFIX) {
        if (re.test(f) && !images[role]) images[role] = join(dir, f)
      }
    }
  }

  let fmOut = fm
  for (const role of ['thumbnail', 'before', 'after']) {
    const line = new RegExp(`^${role}:.*$`, 'm')
    if (images[role]) {
      const target = `./${slug}/${role}${extname(images[role]).toLowerCase()}`
      fmOut = line.test(fmOut) ? fmOut.replace(line, `${role}: ${target}`) : `${fmOut}\n${role}: ${target}`
    } else {
      fmOut = fmOut.replace(new RegExp(`^${role}:\\s*$\\n?`, 'm'), '')
    }
  }
  fmOut = fmOut.replace(/\n{2,}/g, '\n').trim()

  const out = `---\n${fmOut}\n---\n\n${body}`
  const target = join(SITE, `${slug}${ext}`)
  const changed = !existsSync(target) || readFileSync(target, 'utf8') !== out
  const imgDir = join(SITE, slug)
  if (dry) {
    console.log(`${changed ? 'would write' : 'unchanged '}  ${slug}${Object.keys(images).length ? '  images: ' + Object.keys(images).join(',') : ''}`)
    return changed
  }
  if (Object.keys(images).length) mkdirSync(imgDir, { recursive: true })
  for (const [role, p] of Object.entries(images)) copyFileSync(p, join(imgDir, `${role}${extname(p).toLowerCase()}`))
  if (changed) writeFileSync(target, out)
  console.log(`${changed ? 'published' : 'unchanged'}  ${slug}`)
  return changed
}

const main = () => {
  let targets = paths.map((p) => resolve(p))
  if (flags.has('--all')) targets = listVaultEntries()
  if (flags.has('--unpublished')) {
    const published = new Set(readdirSync(SITE).filter((f) => /\.mdx?$/.test(f)).map((f) => f.replace(/\.mdx?$/, '')))
    targets = listVaultEntries().filter((p) => !published.has(basename(p).replace(/\.mdx?$/, '')))
  }
  if (targets.length === 0) {
    console.log('nothing to publish')
    return
  }
  let changed = 0
  for (const t of targets) if (publishOne(t)) changed++
  if (dry || !flags.has('--commit') || changed === 0) return
  execSync('git add src/content/ships', { stdio: 'inherit' })
  const msg = changed === 1 ? `Publish ship: ${basename(targets[0]).replace(/\.mdx?$/, '')}` : `Publish ${changed} ships`
  execSync(`git commit -q -m ${JSON.stringify(msg)}`, { stdio: 'inherit' })
  execSync('git push -q', { stdio: 'inherit' })
  console.log(`committed + pushed: ${msg}`)
}

main()
