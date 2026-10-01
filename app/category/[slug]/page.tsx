import CardList from "@/components/blog/CardList";
import PageNav from "@/components/Pagination";
import { getPostsByCategory, getCategoryCount } from "@/app/actions";
import { urlForImage } from "@/sanity/lib/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = decodeURIComponent(params.slug);
	return {
		title: `${slug} | Haiueom`,
	};
}

export default async function Page({
	params,
	searchParams,
}: Props & {
	searchParams?: {
		query?: string;
		page?: string;
		limit?: string;
	};
}) {
	const slug = decodeURIComponent(params.slug);
	const currentPage = Number(searchParams?.page) || 1;
	const limit = Number(searchParams?.limit) || 5;
	const offset = (currentPage - 1) * limit;

	const count = await getCategoryCount({ slug });
	if (count === 0) {
		notFound();
	}

	const { data, total } = await getPostsByCategory({
		slug,
		offset,
		limit,
	});

	return (
		<div className="divide-y divide-accent-foreground dark:divide-accent">
			<div className="space-y-4 py-8 md:space-y-6">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
					{slug}
				</h1>
				<p className="text-muted-foreground">
					Posts in the {slug} category.
				</p>
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
	);
}
