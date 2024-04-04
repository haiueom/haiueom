import Image from "next/image";
import type { Metadata } from "next";
import { getUser } from "../actions";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
	title: "Ilham Taufiq",
	description: "Web Developer - Digital Designer",
};

export default async function HomePage() {
	const data = await getUser({ slug: "haiueom" });
	return (
		<div className="mx-auto flex max-w-3xl flex-col items-center text-center justify-center">
			<div className="mb-8 relative w-32 h-32 rounded-full overflow-hidden">
				<Image
					src={urlForImage(data.image)}
					alt={data.image.alt}
					fill
					className="object-cover object-center"
					priority
				/>
			</div>
			<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
				{data.name}
			</h1>
			<p className="mt-6 max-w-prose text-lg text-muted-foreground">
				{data.bio}
			</p>
		</div>
	);
}
