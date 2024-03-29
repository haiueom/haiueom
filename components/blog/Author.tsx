import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function Author(data: any) {
	data = data.data;
	return (
		<div>
			<span className="sr-only">Authors</span>
			<div className="flex flex-wrap items-center justify-center space-x-3">
				<Image
					src={urlForImage(data.image)}
					width={38}
					height={38}
					alt={`${data.name} avatar`}
					className="h-10 w-10 rounded-full"
				/>
				<div className="text-start whitespace-nowrap text-sm font-medium leading-5">
					<span className="sr-only">Name</span>
					<p className="text-foreground font-bold">{data.name}</p>
					<span className="sr-only">Github</span>
					<p>
						{data.links.github && (
							<Link
								href={data.links.github}
								className="text-primary hover:brightness-125 dark:hover:brightness-125"
							>
								{data.links.github.replace(
									"https://github.com/",
									"@"
								)}
							</Link>
						)}
					</p>
				</div>
			</div>
		</div>
	);
}
