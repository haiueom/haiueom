import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Ilham Taufiq",
		short_name: "Haiueom",
		description: "Made with ☕ by Ilham Taufiq",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#fff",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
			{
				src: "/img/android-icon-36x36.png",
				sizes: "36x36",
				type: "image/png",
			},
			{
				src: "/img/android-icon-48x48.png",
				sizes: "48x48",
				type: "image/png",
			},
			{
				src: "/img/android-icon-72x72.png",
				sizes: "72x72",
				type: "image/png",
			},
			{
				src: "/img/android-icon-96x96.png",
				sizes: "96x96",
				type: "image/png",
			},
			{
				src: "/img/android-icon-144x144.png",
				sizes: "144x144",
				type: "image/png",
			},
			{
				src: "/img/android-icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
		],
	};
}
