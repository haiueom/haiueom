import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ilham Taufiq",
	description: "Web Developer - Digital Designer",
};

export default function HomePage() {
	return (
		<div className="mx-auto flex max-w-3xl flex-col items-center text-center justify-center">
			<div className="mb-8 relative w-32 h-32 rounded-full overflow-hidden">
				<Image
					src="/img/avatar.jpg"
					alt="Ilham Taufiq"
					fill
					className="object-cover object-center"
					priority
				/>
			</div>
			<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
				Ilham Taufiq
			</h1>
			<p className="mt-6 max-w-prose text-lg text-muted-foreground">
				Just another web developer.
			</p>
		</div>
	);
}
