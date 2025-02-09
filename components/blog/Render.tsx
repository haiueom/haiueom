"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Skeleton } from "@/components/ui/skeleton";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
	ssr: false,
	loading: () => <Skeleton className="absolute top-0 left-0 w-full h-full" />,
});

const serializers = {
	types: {
		youtube: ({ value }: any) => {
			return (
				<div
					className="relative aspect-video"
					style={{ paddingTop: "56.25%" }}
				>
					<ReactPlayer
						className="absolute top-0 left-0"
						url={value.url}
						width={"100%"}
						height={"100%"}
						controls
					/>
				</div>
			);
		},
		image: ({ value }: any) => {
			return (
				<figure className="relative aspect-video w-full">
					<Image
						src={urlForImage(value)}
						alt={value.alt}
						fill
						className={`object-contain`}
					/>
					<figcaption>{value.desc}</figcaption>
				</figure>
			);
		},
	},
	block: {
		pre: ({ children }: any) => <pre>{children}</pre>,
	},
};
export const BlogRender = ({ data }: any) => {
	return (
		<div className="prose lg:prose-xl py-10 dark:prose-invert">
			<PortableText value={data.body} components={serializers} />
		</div>
	);
};
