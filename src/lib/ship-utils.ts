import type { CollectionEntry } from 'astro:content';

export type Ship = CollectionEntry<'ships'>;

export function getISOWeek(date: Date): { year: number; week: number } {
	// Use UTC accessors so dates created via Date.UTC(...) don't shift by local timezone offset
	const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
	const dayNum = d.getUTCDay() || 7;
	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
	return { year: d.getUTCFullYear(), week: weekNo };
}

export function isoWeekStart(year: number, week: number): Date {
	const jan4 = new Date(Date.UTC(year, 0, 4));
	const dayOfWeek = jan4.getUTCDay() || 7;
	const week1Monday = new Date(jan4);
	week1Monday.setUTCDate(jan4.getUTCDate() - dayOfWeek + 1);
	const target = new Date(week1Monday);
	target.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7);
	return target;
}

export function isoWeekEnd(year: number, week: number): Date {
	const start = isoWeekStart(year, week);
	const end = new Date(start);
	end.setUTCDate(start.getUTCDate() + 6);
	return end;
}

export function weeksInYear(year: number): number {
	const dec28 = new Date(Date.UTC(year, 11, 28));
	return getISOWeek(dec28).week;
}

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatWeekRange(year: number, week: number): string {
	const start = isoWeekStart(year, week);
	const end = isoWeekEnd(year, week);
	const startMonth = MONTHS_SHORT[start.getUTCMonth()];
	const endMonth = MONTHS_SHORT[end.getUTCMonth()];
	if (startMonth === endMonth) {
		return `${startMonth} ${start.getUTCDate()}–${end.getUTCDate()}`;
	}
	return `${startMonth} ${start.getUTCDate()} – ${endMonth} ${end.getUTCDate()}`;
}

export type WeekCell = {
	week: number;
	year: number;
	maxEffort: 0 | 1 | 2 | 3;
	shipCount: number;
	dateRange: string;
	isCurrent: boolean;
	isFuture: boolean;
};

export function buildWeekCells(ships: Ship[], year: number, now: Date = new Date()): WeekCell[] {
	const total = weeksInYear(year);
	const nowIso = getISOWeek(now);
	const isThisYear = nowIso.year === year;

	const buckets = new Map<number, { maxEffort: 1 | 2 | 3; count: number }>();
	for (const ship of ships) {
		const iso = getISOWeek(ship.data.date);
		if (iso.year !== year) continue;
		const existing = buckets.get(iso.week);
		const effort = ship.data.effort as 1 | 2 | 3;
		if (existing) {
			existing.count += 1;
			if (effort > existing.maxEffort) existing.maxEffort = effort;
		} else {
			buckets.set(iso.week, { maxEffort: effort, count: 1 });
		}
	}

	const cells: WeekCell[] = [];
	for (let w = 1; w <= total; w++) {
		const bucket = buckets.get(w);
		const isCurrent = isThisYear && nowIso.week === w;
		const isFuture = isThisYear && w > nowIso.week;
		cells.push({
			week: w,
			year,
			maxEffort: bucket ? bucket.maxEffort : 0,
			shipCount: bucket ? bucket.count : 0,
			dateRange: formatWeekRange(year, w),
			isCurrent,
			isFuture,
		});
	}
	return cells;
}

export function groupShipsByWeek(ships: Ship[]): Array<{
	year: number;
	week: number;
	dateRange: string;
	ships: Ship[];
}> {
	const groups = new Map<string, { year: number; week: number; ships: Ship[] }>();
	for (const ship of ships) {
		const iso = getISOWeek(ship.data.date);
		const key = `${iso.year}-${String(iso.week).padStart(2, '0')}`;
		if (!groups.has(key)) {
			groups.set(key, { year: iso.year, week: iso.week, ships: [] });
		}
		groups.get(key)!.ships.push(ship);
	}
	return Array.from(groups.entries())
		.sort(([a], [b]) => b.localeCompare(a))
		.map(([, value]) => ({
			...value,
			ships: value.ships.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()),
			dateRange: formatWeekRange(value.year, value.week),
		}));
}

export function daysSince(date: Date, now: Date = new Date()): number {
	return Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
}

export function countShipsInYear(ships: Ship[], year: number, asOf: Date = new Date()): number {
	return ships.filter((s) => {
		if (s.data.date > asOf) return false;
		return getISOWeek(s.data.date).year === year;
	}).length;
}

export function weeksLeftInYear(year: number, asOf: Date = new Date()): number {
	const total = weeksInYear(year);
	const current = getISOWeek(asOf);
	if (current.year > year) return 0;
	if (current.year < year) return total;
	return Math.max(0, total - current.week);
}

export function computeStreak(ships: Ship[], asOf: Date = new Date()): number {
	const weeksWithShips = new Set<string>();
	for (const s of ships) {
		const iso = getISOWeek(s.data.date);
		weeksWithShips.add(`${iso.year}-${iso.week}`);
	}

	const current = getISOWeek(asOf);
	let year = current.year;
	let week = current.week;

	// If current week has no ship, drop back one to count "trailing" streak
	if (!weeksWithShips.has(`${year}-${week}`)) {
		week -= 1;
		if (week < 1) {
			year -= 1;
			week = weeksInYear(year);
		}
	}

	let streak = 0;
	while (weeksWithShips.has(`${year}-${week}`)) {
		streak += 1;
		week -= 1;
		if (week < 1) {
			year -= 1;
			week = weeksInYear(year);
		}
	}

	return streak;
}
