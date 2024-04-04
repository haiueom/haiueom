import { defineField, defineType } from "sanity";

export default defineType({
	name: "hoyolab",
	title: "Hoyolab",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "env",
			title: "Env",
			type: "slug",
			options: {
				source: "name",
				maxLength: 20,
			},
		}),
		defineField({
			name: "cookie",
			title: "Cookie",
			type: "text",
		}),
		defineField({
			name: "note",
			title: "Note",
			type: "text",
		}),
	],
});
