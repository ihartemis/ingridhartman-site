import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../consts';

export async function GET(context) {
	const ships = await getCollection('ships');
	const sorted = ships.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
	return rss({
		title: `${SITE_TITLE} — Ship Log`,
		description: 'Things Ingrid Hartman shipped.',
		site: context.site,
		items: sorted.map((ship) => ({
			title: ship.data.title,
			pubDate: ship.data.date,
			link: `/ship/${ship.id}/`,
			description: ship.body?.split(/\n\s*\n/)[0]?.trim() ?? '',
		})),
	});
}
