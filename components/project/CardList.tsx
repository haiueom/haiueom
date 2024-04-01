import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "../Link";

type CardProps = {
	title: string;
	description: string;
	imgSrc: string;
	href: string;
	tags?: string[];
};

const CardList = ({ title, description, imgSrc, href, tags = [] }: CardProps) => (
	<div className="w-full p-4 md:w-1/2">
		<div
			className={`${
				imgSrc && "h-full"
			} overflow-hidden rounded-md border border-border`}
		>
			{imgSrc &&
				(href ? (
					<Link href={href} aria-label={`Link to ${title}`}>
						<div className="relative aspect-video w-full rounded-t-md">
							<Image
								src={imgSrc}
								alt={`${title} thumbnail`}
								fill
								className="object-center object-cover"
							/>
						</div>
					</Link>
				) : (
					<div className="relative aspect-video w-full rounded-t-md">
						<Image
							src={imgSrc}
							alt={`${title} thumbnail`}
							fill
							className="object-center object-cover"
						/>
					</div>
				))}
			<div className="p-6">
				<h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight line-clamp-2">
					{href ? (
						<Link href={href} aria-label={`Link to ${title}`}>
							{title}
						</Link>
					) : (
						title
					)}
				</h2>
				<div className="mb-3 flex flex-wrap">
					{tags.map((tag, index) => (
						<Badge
							key={tag}
							className="mr-2 mb-2"
							variant={index === 0 ? "default" : "outline"}
						>
							{tag}
						</Badge>
					))}
				</div>
				<p className="prose prose-sm mb-3 max-w-none text-muted-foreground line-clamp-2">
					{description}
				</p>
				{href && (
					<Link
						href={href}
						className="text-base font-medium leading-6 text-primary hover:brightness-125 dark:hover:brightness-125"
						aria-label={`Link to ${title}`}
					>
						Learn more &rarr;
					</Link>
				)}
			</div>
		</div>
	</div>
);

export default CardList;
