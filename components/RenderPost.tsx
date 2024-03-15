'use client';

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Suspense } from "react";

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function ytEmbed(url: string) {
	const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/;
	const match = url.match(regex);
	if (match) {
		const videoId = match[1];
		return `https://www.youtube.com/embed/${videoId}`;
	}
	return null;
}

const serializers = {
	types: {
		youtube: ({ value } : any) => {
			const embedUrl = ytEmbed(value.url);
			if (embedUrl) {
				return (
					<Suspense fallback={<p>Loading youtube video . . .</p>}>
						<ReactPlayer
							url={embedUrl}
							controls={true}
							pip={true}
							
						/>
					</Suspense>
				);
			}
			return null;
		},
		image: ({ value } : any) => {
			return (
				// <figure className="relative aspect-video w-full rounded-md">
				// 	<Image
				// 		src={urlForImage(value)}
				// 		alt={value.alt}
				// 		layout="fill"
				// 		className={`rounded-md object-contain object-center`}
				// 	/>
				// 	<figcaption>{value.desc}</figcaption>
				// </figure>
				<pre>Link Image: {urlForImage(value)}</pre>
			);
		},
	},
	block: {
		pre: ({ children } : any) => <pre>{children}</pre>,
	},
};
export const RenderPost = ({ data } : any) => {
	return (
		<div className="prose lg:prose-xl py-10">
			<PortableText value={data.body} components={serializers} />
		</div>
	);
};
