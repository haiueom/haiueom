import Image from "next/image";
import Link from "@/components/Link";
import Tag from "@/components/Tag";

type CardProps = {
	title: string;
	description: string;
	imgSrc: string;
	href: string;
	tags?: string[];
	date: string;
};

const CardList = ({
	title,
	description,
	imgSrc,
	href,
	tags = [],
	date,
}: CardProps) => (
	<div className="w-full py-4">
		<div className="space-y-2 md:grid md:grid-cols-5 md:gap-4 md:items-start md:space-y-0">
			<div className="md:col-span-2">
				<Link href={`/blog/${href}`}>
					<div className="relative aspect-video w-full rounded-md">
						<Image
							src={imgSrc}
							alt={`${title} thumbnail`}
							fill
							className="rounded-md object-center object-cover"
						/>
					</div>
				</Link>
			</div>
			<div className="space-y-3 md:col-span-3">
				<div>
					<h3 className="text-2xl font-bold leading-8 tracking-tight mb-2">
						<Link
							href={`/blog/${href}`}
							className="text-foreground"
						>
							{title}
						</Link>
					</h3>
					<div className="flex flex-wrap space-x-3">
						{tags?.map((tag) => (
							<Tag key={tag} text={tag} />
						))}
					</div>
				</div>
				<div className="prose prose-sm max-w-none text-muted-foreground">
					{description}
				</div>
				<div>
					<dl>
						<dt className="sr-only">Published on</dt>
						<dd className="flex gap-1 text-base font-medium leading-6 text-muted-foreground">
							<span>1000 views</span>
							<span>・</span>
							<time dateTime={date}>
								{new Date(date).toLocaleDateString("en-US", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</time>
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
);

export default CardList;
