import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ships = defineCollection({
	loader: glob({ base: './src/content/ships', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			effort: z.union([z.literal(1), z.literal(2), z.literal(3)]),
			// What kind of artifact this is. Drives the dialogue tree quips.
			medium: z.enum(['writing', 'web', 'app', 'media', 'other']),
			// Which web property / business this ship belongs to. Convention:
			//   ingridhartman | artemisnova | ournanny | highvibe | shipslc | tinyhealth | whoop
			project: z.string(),
			// Tools used to make it (free-form, lowercase-kebab-case).
			tools: z.array(z.string()).optional(),
			// Hero image for the future Collection page. Not rendered on the detail page.
			// `.nullable()` allows YAML `thumbnail:` (empty value) — same intent as omitting the field.
			thumbnail: image().nullable().optional(),
			// Before/after pair for visual progression. Render side-by-side at the top of the detail page.
			// Either, both, or neither can be set.
			before: image().nullable().optional(),
			after: image().nullable().optional(),
			// Optional — only when the artifact lives elsewhere (live URL, repo, app store, Loom).
			link: z.string().optional(),
		}),
});

export const collections = { ships };
