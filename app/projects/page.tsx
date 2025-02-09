import CardList from "@/components/project/CardList";
import { getProjects } from "@/app/actions";
import PageNav from "@/components/Pagination";
import SearchBar from "@/components/Search";
import { thumbnail } from "@/sanity/lib/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Haiueom",
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
	const limit = Number(searchParams?.limit) || 6;
	const offset = (currentPage - 1) * limit;

	const { data, total } = await getProjects({ offset, limit, search });

	return (
		<div className="divide-y divide-accent-foreground dark:divide-accent">
			<div className="space-y-4 py-8 md:space-y-6">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
					Projects
				</h1>
				<p className="text-muted-foreground">
					Stuff I&apos;ve personally developed or contributed to!
				</p>
				<SearchBar placeholder="Search projects" />
			</div>
			<div className="space-y-2 py-8 md:space-y-5">
				<div className="-m-4 flex flex-wrap">
					{data.map((d: any) => (
						<CardList
							key={d.title}
							title={d.title}
							description={d.description}
							imgSrc={thumbnail(d.image)}
							href={d.link}
						/>
					))}
				</div>
				<PageNav total={total} />
			</div>
		</div>
	);
}
