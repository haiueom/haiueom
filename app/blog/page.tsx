import CardList from "@/components/blog/CardList";
import { getPosts } from "../actions";
import SearchBar from "@/components/Search";
import PageNav from "@/components/Pagination";
import { urlForImage } from "@/sanity/lib/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blogs | Haiueom",
	description: "Welcome to my blog. Here you can find all my latest posts.",
};

export default async function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
		limit?: string;
	};
}) {
	const search = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;
	const limit = Number(searchParams?.limit) || 5;
	const offset = (currentPage - 1) * limit;

	const { data, total } = await getPosts({ offset, limit, search });

	return (
		<>
			<div className="divide-y divide-accent-foreground dark:divide-accent">
				<div className="space-y-4 py-8 md:space-y-6">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Posts
					</h1>
					<p className="text-muted-foreground">
						Welcome to my blog. Here you can find all my latest
						posts.
					</p>
					<SearchBar placeholder="Search posts" />
				</div>
				<div className="space-y-2 py-4 md:space-y-5">
					{data.map((d: any) => (
						<CardList
							key={d.title}
							title={d.title}
							description={d.summary}
							imgSrc={urlForImage(d.image)}
							href={d.slug.current}
							categories={d.categories}
							date={d.publishedAt}
						/>
					))}
					<PageNav total={total} />
				</div>
			</div>
		</>
	);
}
