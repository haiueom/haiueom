"use server";

import { client } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";

export async function getAcc() {
	const data = await client.fetch(`*[_type == "hoyolab"]`);
	return data;
}

export async function getUser({ slug }: { slug: string }) {
	const data = await client.fetch(
		`*[_type == "author" && slug.current == $slug] [0]`,
		{
			slug,
		}
	);

	return data;
}

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
		`*[_type == "post" && title match $search] | order(publishedAt desc) [$offset...$limit] {"categories" : categories[]->{name,slug}, author->{name,image,links,}, ...}`,
		{
			search: `*${search ?? ""}*`,
			offset,
			limit: offset + limit,
		}
	);

	const count = await client.fetch(
		`count(*[_type == "post" && title match $search])`,
		{
			search: `*${search ?? ""}*`,
		}
	);

	const total = Math.ceil(count / limit);

	revalidatePath("/blog");

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
			search: `*${search ?? ""}*`,
			offset,
			limit: offset + limit,
		}
	);

	const count = await client.fetch(
		`count(*[_type == "project" && title match $search])`,
		{
			search: `*${search ?? ""}*`,
		}
	);

	const total = Math.ceil(count / limit);

	revalidatePath("/projects");

	return {
		data,
		count,
		total,
	};
}

export async function getPostBySlug({ slug }: { slug: string }) {
	const data = await client.fetch(
		`*[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {"categories" : categories[]->{name,slug}, author->{name,image,links,}, ...}`,
		{
			slug,
		}
	);

	revalidatePath("/blog/[slug]", "page");

	return data;
}

export async function getCategoryCount({ slug }: { slug: string }) {
	const data = await client.fetch(
		`count(*[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)])`,
		{
			slug,
		}
	);

	return data;
}

export async function getCategories() {
	const data = await client.fetch<
		{ name: string; slug: { current: string }; count: number }[]
	>(
		`*[_type == "category"] {name, slug, "count": count(*[_type == "post" && references(^._id)])}`
	);

	return data;
}

export async function getPostsByCategory({
	slug,
	offset = 0,
	limit = 10,
}: {
	slug: string;
	offset?: number;
	limit?: number;
}) {
	const data = await client.fetch(
		`*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) [$offset...$limit] {"categories" : categories[]->{name,slug}, author->{name,image,links,}, ...}`,
		{
			slug,
			offset,
			limit: offset + limit,
		}
	);

	const count = await client.fetch(
		`count(*[_type == "post" && $slug in categories[]->slug.current])`,
		{
			slug,
		}
	);

	const total = Math.ceil(count / limit);

	return {
		data,
		count,
		total,
	};
}
