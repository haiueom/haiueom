// ./schemaTypes/youTubeType/index.ts

import { defineType, defineField } from "sanity";
import { PlayIcon } from "lucide-react";
import { YouTubePreview } from "./ytPreview";

export default defineType({
	name: "youtube",
	type: "object",
	title: "YouTube Embed",
	icon: PlayIcon,
	fields: [
		defineField({
			name: "url",
			type: "url",
			title: "YouTube video URL",
		}),
	],
	preview: {
		select: { title: "url" },
	},
	components: {
		preview: YouTubePreview,
	},
});
