import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function Author({ data }: { data: any }) {
	return (
		<div>
			<span className="sr-only">Authors</span>
			<div className="flex flex-wrap items-center justify-center space-x-3">
				<div className="relative w-10 h-10 rounded-full overflow-hidden">
					<Image
						src={urlForImage(data.image)}
						alt={data.image.alt}
						fill
						className="object-cover object-center"
					/>
				</div>
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
