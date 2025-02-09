import Link from "@/components/Link";
import Tag from "@/components/category/Tag";
import { getCategories } from "@/app/actions";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
	const data = await getCategories();
	// sort data base on data.count
	const sortedData = data.sort((a: any, b: any) => b.count - a.count);
	return (
		<div className="flex flex-col items-center justify-center space-y-6">
			<div className="">
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
					Categories
				</h1>
			</div>
			<Separator className="max-w-lg" />
			<div className="flex max-w-lg flex-wrap gap-4">
				{data.length === 0 && "No categories found."}
				{sortedData.map((t) => {
					return (
						<div key={t}>
							<Tag text={t.slug.current} />
							<Link
								href={`/category/${t.slug.current}`}
								className="text-sm font-semibold uppercase text-muted-foreground"
								aria-label={`View posts tagged ${t.name}`}
							>
								{` (${t.count})`}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
