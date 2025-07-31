import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";
import nodemailer from 'nodemailer';
import { sendEmail } from './mailerSend'

const transporter = nodemailer.createTransport({

	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "3622701e495f93",
		pass: "f13ea9eb54b438",
	},
});


const prisma = new PrismaClient();

export class UserController {
	public static async createUser(request: Request, response: Response) {
		try {
			const { name, email, age, phone, CPF, adress, isRegisteredVendor } = request.body;

			const createInput: Prisma.UserCreateInput = {
				name: name,
				email: email,
                age: age,
                phone: phone,
                CPF: CPF,
                adress: adress,
				isRegisteredVendor: isRegisteredVendor, 
			};

			const createdUser = await prisma.user.create({
				data: createInput,
			});

			if(!createdUser){
				return response.status(404).json();
			}

			///depois de certeza que foi cadastrado, retornar email//
			sendEmail(createdUser.email, "Cadastro na Elektro", `Olá ${createdUser.name}! Obrigado por se cadastrar na Elektro!`)

			response.status(201).json(createdUser);
			
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			console.log("Fetching user with ID:", userId);

			const foundUser = await prisma.user.findUnique({
				where: {
					id: userId,
				},
				include: {
					Products: true,
					Pedidos: true,
				}
			});

			response.status(201).json(foundUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readAllUsers(request: Request, response: Response) {
		try {
			const users = await prisma.user.findMany({});

			response.status(200).json(users);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async updateUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { name, email, age, phone, CPF, adress, isRegisteredVendor } = request.body;

			const createInput: Prisma.UserUpdateInput = {
				name: name,
				email: email,
                age: age,
                phone: phone,
                CPF: CPF,
                adress: adress,
				isRegisteredVendor: isRegisteredVendor,
			};

			const updatedUser = await prisma.user.update({
				data: createInput,
				where: {
					id: userId,
				},
			});

			response.status(200).json(updatedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async upsertUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { name, email, age, phone, CPF, adress, isRegisteredVendor } = request.body;

			const createInput: Prisma.UserCreateInput = {
				name: name,
				email: email,
				age: age,
				phone: phone,
				CPF: CPF,
				adress: adress,
				isRegisteredVendor: isRegisteredVendor,
			};

			const updateInput: Prisma.UserUpdateInput = {
				name: name,
				email: email,
                age: age,
                phone: phone,
                CPF: CPF,
                adress: adress,
				isRegisteredVendor: isRegisteredVendor,
			};

			const upsertedUser = await prisma.user.upsert({
				create: createInput,
				update: updateInput,
				where: {
					id: userId,
				},
			});

			response.status(201).json(upsertedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async deleteUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;

			const deletedUser = await prisma.user.delete({
				where: {
					id: userId,
				},
			});

			response.status(200).json(deletedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async deleteAllUsers(request: Request, response: Response) {
		try {
			const deletedUser = await prisma.user.deleteMany();
			response.status(200).json(deletedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}
}
