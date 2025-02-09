import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page Not Found | Haiueom",
};

export default async function NotFound() {
	return (
		<main className="my-auto">
			<div className="mx-auto flex max-w-3xl flex-col items-center text-center justify-center">
				<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
					404 - Page Not Found
				</h1>
				<p className="mt-6 max-w-prose text-lg text-muted-foreground">
					Could not find requested resource.
				</p>
			</div>
		</main>
	);
}
