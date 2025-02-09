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
			validation: rule => [
				rule.required(),
				rule.regex(/^[a-zA-Z]+$/).error("Only one word with no punctuation allowed"),
			]
		}),
		defineField({
			name: "cookie",
			title: "Cookie",
			type: "text",
			description: "Get cookie_token & account_id from genshin.hoyoverse.com",
			validation: rule => rule.required()
		}),
		defineField({
			name: "note",
			title: "Note",
			type: "text",
		}),
	],
});
