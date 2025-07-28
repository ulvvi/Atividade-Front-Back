import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/prisma";       

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