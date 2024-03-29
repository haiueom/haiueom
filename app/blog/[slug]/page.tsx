import { ogImage } from "@/sanity/lib/image";
import { getPostBySlug } from "@/app/actions";
import { RenderPost } from "@/components/RenderPost";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import BlogImage from "@/components/blog/Image";
import Author from "@/components/blog/Author";
import BlogDate from "@/components/blog/Date";
import BlogTitle from "@/components/blog/Title";
import BlogCategory from "@/components/blog/Category";

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

	return (
		<article>
			<div className="space-y-4 border-b border-muted-foreground py-10 text-center dark:border-muted">
				<BlogImage data={data.mainImage} />
				{data.tags && <BlogCategory data={data.tags} className="justify-center" />}
				<BlogTitle data={data.title} />
				<BlogDate data={data.publishedAt} />
				<Author data={data.author} />
			</div>
			<RenderPost data={data} />
		</article>
	);
}
