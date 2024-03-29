import { defineField, defineType } from "sanity";

export default defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (rule) => rule.email(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
			],
		}),
		defineField({
			name: "bio",
			title: "Bio",
			type: "text",
		}),
		defineField({
			name: "links",
			title: "Links",
			type: "object",
			fields: [
				{
					name: "website",
					title: "Website",
					type: "url",
				},
				{
					name: "github",
					title: "Github",
					type: "url",
				},
				{
					name: "twitter",
					title: "Twitter",
					type: "url",
				},
				{
					name: "linkedin",
					title: "LinkedIn",
					type: "url",
				},
				{
					name: "instagram",
					title: "Instagram",
					type: "url",
				},
				{
					name: "facebook",
					title: "Facebook",
					type: "url",
				},
				{
					name: "youtube",
					title: "Youtube",
					type: "url",
				},
				{
					name: "tiktok",
					title: "TikTok",
					type: "url",
				},
				{
					name: "twitch",
					title: "Twitch",
					type: "url",
				},
				{
					name: "other",
					title: "Other",
					type: "url",
				},
			],
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
});
