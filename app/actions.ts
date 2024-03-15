"use server";

import { client } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";

export async function getPosts({
	search,
	offset = 0,
	limit = 10,
}: {
	search?: string | undefined;
	offset?: number;
	limit?: number;
}) {
	const data = await client.fetch(
		`*[_type == "post" && title match $search] | order(publishedAt desc) [$offset...$limit] {"tags" : categories[]->title, author->{name,image,links,}, ...}`,
		{
			search: `*${search}*`,
			offset,
			limit,
		}
	);

	const count = await client.fetch(
		`count(*[_type == "post" && title match $search])`,
		{
			search: `*${search}*`,
		}
	);

	const total = Math.ceil(count / limit);

	revalidatePath('/blog')

	return {
		data,
		count,
		total,
	};
}

export async function getProjects({
	search,
	offset = 0,
	limit = 10,
}: {
	search?: string | undefined;
	offset?: number;
	limit?: number;
}) {
	const data = await client.fetch(
		`*[_type == "project" && title match $search] | order(publishedAt desc) [$offset...$limit]`,
		{
			search: `*${search}*`,
			offset,
			limit,
		}
	);

	const count = await client.fetch(
		`count(*[_type == "project" && title match $search])`,
		{
			search: `*${search}*`,
		}
	);

	const total = Math.ceil(count / limit);

	revalidatePath('/projects')

	return {
		data,
		count,
		total,
	};
}

export async function getPostBySlug({ slug }: { slug: string }) {
	const data = await client.fetch(
		`*[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {"tags" : categories[]->title, author->{name,image,links,}, ...}`,
		{
			slug,
		}
	);

	revalidatePath('/blog/[slug]', 'page')

	return data;
}
