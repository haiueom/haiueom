import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

export default function BlogCategory({
	data,
	className = "",
}: {
	data: any;
	className?: string;
}) {
	return (
		<div>
			<div className={`flex flex-wrap space-x-4 ${className}`}>
				{data.map((item: any, index: number) => (
					<Link
						key={index}
						className={badgeVariants({ variant: "outline" })}
						href={`/category/${item.slug.current}`}
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
}
