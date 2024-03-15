import Image from "@/components/Image";
import Tag from "@/components/Tag";
import Link from "next/link";
import NextImage from "next/image";
import { ogImage, urlForImage } from "@/sanity/lib/image";
import { getPostBySlug } from "@/app/actions";
import { RenderPost } from "@/components/RenderPost";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { slug: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch data
	const post = await getPostBySlug({ slug });

	// if data null return 404
	if (!post.slug) {
		return notFound();
	}

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: `${post.title} | Haiueom`,
		description: post.summary,
		openGraph: {
			images: [
				{
					url: ogImage(post.mainImage),
					width: 1200,
					height: 630,
					alt: post.mainImage.alt,
				},
				...previousImages,
			],
		},
	};
}

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const data = await getPostBySlug({ slug });

	// if data null return 404
	if (!data.slug) {
		return notFound();
	}

	const tags = data.tags;
	const date = data.publishedAt;

	return (
		<article>
			<div className="space-y-1 border-b border-muted-foreground pb-10 text-center dark:border-muted">
				<div className="w-full">
					<div className="relative -mx-6 mt-6 md:-mx-8">
						<div className="relative aspect-video w-full rounded-md">
							<NextImage
								src={urlForImage(data.mainImage)}
								alt={data.mainImage.alt}
								fill
								className={`rounded-md object-center object-cover`}
								priority
							/>
						</div>
					</div>
				</div>
				<div className="py-4">
					<span className="sr-only">Published on</span>
					<span className="flex items-center justify-center text-base font-medium leading-6 text-muted-foreground">
						<time dateTime={date}>
							{new Date(date).toLocaleDateString("en-US", {
								weekday: "long",
							})}
						</time>
						<span className="mx-2">・</span>
						<time dateTime={date}>
							{new Date(date).toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</time>
					</span>
				</div>
				<div className="py-4">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
						{data.title}
					</h1>
				</div>
				{tags && (
					<div className="py-4">
						<div className="align-center flex flex-wrap justify-center space-x-4">
							{tags.map((tag: any) => (
								<Tag key={tag} text={tag} />
							))}
						</div>
					</div>
				)}
				<div className="pt-4">
					<span className="sr-only">Authors</span>
					<div className="flex flex-wrap items-center justify-center space-x-2">
						<Image
							src={urlForImage(data.author.image)}
							width={38}
							height={38}
							alt={`${data.author.name} avatar`}
							className="h-10 w-10 rounded-full"
						/>
						<div className="whitespace-nowrap text-sm font-medium leading-5">
							<span className="sr-only">Name</span>
							<p className="text-foreground font-bold">
								{data.author.name}
							</p>
							<span className="sr-only">Twitter</span>
							<p>
								{data.author.links.github && (
									<Link
										href={data.author.links.github}
										className="text-primary hover:brightness-125 dark:hover:brightness-125"
									>
										{data.author.links.github.replace(
											"https://github.com/",
											"@"
										)}
									</Link>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<RenderPost data={data} />
		</article>
	);
}
