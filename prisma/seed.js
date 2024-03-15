// seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedData = async () => {

	const reset = await prisma.post.deleteMany();
	console.log(reset);

	const data = await prisma.post.createMany({
		data: [
			{
				title: "Post 1",
				desc: "Post 1 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag1", "tag2"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 2",
				desc: "Post 2 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag3", "tag4"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 3",
				desc: "Post 3 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag5", "tag6"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 4",
				desc: "Post 4 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag7", "tag8"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 5",
				desc: "Post 5 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag9", "tag10"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 6",
				desc: "Post 6 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag11", "tag12"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 7",
				desc: "Post 7 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag13", "tag14"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 8",
				desc: "Post 8 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag15", "tag16"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 9",
				desc: "Post 1 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag1", "tag2"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 10",
				desc: "Post 2 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag3", "tag4"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 11",
				desc: "Post 3 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag5", "tag6"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 12",
				desc: "Post 4 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag7", "tag8"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 13",
				desc: "Post 5 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag9", "tag10"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 14",
				desc: "Post 6 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag11", "tag12"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 15",
				desc: "Post 7 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag13", "tag14"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 16",
				desc: "Post 8 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag15", "tag16"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 17",
				desc: "Post 9 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag17", "tag18"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 18",
				desc: "Post 10 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag19", "tag20"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 19",
				desc: "Post 11 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag21", "tag22"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 20",
				desc: "Post 12 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag23", "tag24"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 21",
				desc: "Post 13 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag25", "tag26"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 22",
				desc: "Post 14 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag27", "tag28"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 23",
				desc: "Post 15 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag29", "tag30"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 24",
				desc: "Post 16 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag31", "tag32"],
				},
				href: "https://www.google.com",
			},
			{
				title: "Post 25",
				desc: "Post 17 description",
				image: "https://fakeimg.pl/600x400",
				tags: {
					set: ["tag33", "tag34"],
				},
				href: "https://www.google.com",
			},
		],
	});

	console.log(data);
};

seedData()
	.catch((error) => {
		throw error;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
