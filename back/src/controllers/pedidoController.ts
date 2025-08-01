import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class PedidoController {
    public static async createPedido(request: Request, response: Response) {
        try {
            const { userId, products, price, status, date } = request.body;

            const createInput: Prisma.PedidoCreateInput = {
                user: {
                    connect: { id: userId }
                },
                status: status,
                price: price,
                date: date,
                products: {
                    connect: products.map((productId: string) => ({ id: productId })), 
                }
            };

            const createdPedido = await prisma.pedido.create({
                data: createInput,
            });

            response.status(201).json(createdPedido);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }


    public static async readPedido(request: Request, response: Response) {
        try {
            const { pedidoId } = request.params;

            const foundPedido = await prisma.pedido.findUnique({
                where: {
                    id: pedidoId,
                },
                include: {
                    user: true, 
                    products: true, 
                }
            });

            response.status(200).json(foundPedido);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }


    public static async readAllPedidos(request: Request, response: Response) {
        try {
            const pedidos = await prisma.pedido.findMany({
                include: {
                    user: true, 
                    products: true, 
                }
            });

            response.status(200).json(pedidos);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async updatePedido(request: Request, response: Response) {
        try {
            const { pedidoId } = request.params;
            const { status, price, date, products } = request.body;

            const updateInput: Prisma.PedidoUpdateInput = {
                status: status,
                price: price,
                date: date,
                products: {
                    connect: products.map((productId: string) => ({ id: productId }))
                }
            };

            const updatedPedido = await prisma.pedido.update({
                where: { id: pedidoId },
                data: updateInput,
            });

            response.status(200).json(updatedPedido);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async deletePedido(request: Request, response: Response) {
        try {
            const { pedidoId } = request.params;

            const deletedPedido = await prisma.pedido.delete({
                where: { id: pedidoId },
            });

            response.status(200).json(deletedPedido);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }
}
