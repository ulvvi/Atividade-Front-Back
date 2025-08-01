import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/prisma";    

//feito durante a aula de middlewares, serve para apenas limitar o post de produtos
//que o o id de usuario associado é um vendedor registrado

//similar a olx ou mercadolivre, que pra vender o metodo de registro é diferente e mais rigido

//fica ae como um bonus, pois achei interessante 

export async function VendorOnly(request:Request, response:Response, next:NextFunction) {
    try {
        const prisma = new PrismaClient();
        const { ownerId } = request.body;

        const user = await prisma.user.findUnique({
            where: { id: ownerId }
        });

        if (user && !user.isRegisteredVendor) {
            return response.status(403).json({ error: "Usuário não é um vendedor registrado" });
        }

        if (!user) {
            return response.status(404).json({ error: "Usuario não encontrado" });
        }

        next();
    }
    catch (error: any) {
        
        return response.status(500).json({ error: "Internal server error" });
    }

}