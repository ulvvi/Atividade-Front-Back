import { PrismaClient } from "../../generated/prisma";
import { userSeeder } from "./userSeeder";

const prisma = new PrismaClient();

async function main() {
	await prisma.$connect();
	userSeeder(prisma,2);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e: any) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});