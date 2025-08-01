import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";
import nodemailer from 'nodemailer';
import { sendEmail } from './mailerSend'
import auth from "../config/auth";

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
			const { name, email, age, phone, CPF, adress, isRegisteredVendor, password } = request.body;
			const { hash, salt } = auth.generatePassword(password);

			const createInput: Prisma.UserCreateInput = {
				name: name,
				email: email,
                age: age,
                phone: phone,
                CPF: CPF,
                adress: adress,
				isRegisteredVendor: isRegisteredVendor,
				hash: hash,
				salt: salt
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

	static async login(request: Request, response: Response) {


        try {
            
            const {email, password} = request.body;
    
            const user = await prisma.user.findUnique({
                where:{email: email}
            });

            if(!user)
                return response.status(400).json({message:"usuario não existente"})

            const {hash, salt} = user

            if(!auth.checkPassword(password, hash, salt)){
                return response.status(400).json({message:"Senha incorreta"})
            }
            const token = auth.generateJWT(user);
    
            return response.status(201).json({message:"Token enviado" ,token: token})

        } catch (error) {
            return response.status(500).json()

        }
        
        
    }

	public static async readUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			//request.user ai representa a payload do JWT, e eu adicionai o campo loggedID para a verificação
			//de qual o id a ser buscado com o id contido na token da request
			//essas definições estão na função CreateJWT no arquivo auth.ts
			const { loggedId } = request.user as { email: string, loggedId: string };
			//checa se o ID do token eh o mesmo que a requisição esta procurando
			if(userId !== loggedId){
				return response.status(403).json();
			}
			//console.log("ID do usuario:", userId); 
			//usado para testes

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
}
