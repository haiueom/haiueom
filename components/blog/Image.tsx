import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function BlogImage({ data }: { data: any }) {
	return (
		<div className="relative md:-mx-6 lg:-mx-8 ">
			<div className="relative aspect-video w-full rounded-md">
				<Image
					src={urlForImage(data)}
					alt={data.alt}
					fill
					className={`rounded-md object-center object-cover`}
					priority
				/>
			</div>
		</div>
	);
}
