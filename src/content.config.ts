import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const ships = defineCollection({
	loader: glob({ base: './src/content/ships', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		effort: z.union([z.literal(1), z.literal(2), z.literal(3)]),
		// Web property the ship belongs to. Convention:
		//   ingridhartman | artemisnova | ournanny | highvibe | shipslc | tinyhealth | whoop
		property: z.string(),
		link: z.string().optional(),
	}),
});

export const collections = { blog, ships };
