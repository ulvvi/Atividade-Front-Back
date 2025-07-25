import { Prisma, PrismaClient } from "../../generated/prisma";
import {fakerPT_BR} from "@faker-js/faker"

export async function userSeeder(prisma:PrismaClient, numUser:number){

	let users:Prisma.UserCreateInput[] = []

	for(let i = 0; i < numUser; i++){
		users.push({
			name: fakerPT_BR.person.fullName(),
			email: fakerPT_BR.internet.email(),
			age: fakerPT_BR.number.int(),
			phone: fakerPT_BR.phone.number(),
			CPF: fakerPT_BR.person.gender(),
			adress: fakerPT_BR.location.streetAddress(),
		})
	}

	await prisma.user.createMany({
		data:users
	})
	console.log(users)
}