// seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedData = async () => {

	const reset = await prisma.project.deleteMany();
	console.log(reset);

	const raw_data = []

	for (let i = 0; i < 25; i++) {
		raw_data.push({
			name: `Project ${i + 1}`,
			desc: `Project ${i + 1} description`,
			image: "https://fakeimg.pl/600x400",
			tags: {
				set: ["tag1", "tag2"],
			},
			href: "https://www.google.com",
		})
	}

	const data = await prisma.project.createMany({
		data: raw_data,
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
