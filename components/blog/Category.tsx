import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { slug } from "github-slugger";

export default function BlogCategory({
	data,
	className = "",
}: {
	data: any;
	className?: string;
}) {
	const tags = data;
	return (
		<div>
			<div className={`flex flex-wrap space-x-4 ${className}`}>
				{tags.map((tag: any, index: number) => (
					<Link
						key={index}
						className={badgeVariants({ variant: "outline" })}
						href={`/category/${slug(tag)}`}
					>
						{tag}
					</Link>
				))}
			</div>
		</div>
	);
}
