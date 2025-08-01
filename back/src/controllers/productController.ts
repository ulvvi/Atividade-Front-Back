import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class ProductController {
    public static async createProduct(request: Request, response: Response) {
        try {
            const { name, category, state, ownerId, date } = request.body;

            const createInput: Prisma.ProductCreateInput = {
                name: name,
                category: category,
                state: state,
                date: date,
                owner: {
                    connect: { id: ownerId }
                }
            };

            const createdProduct = await prisma.product.create({
                data: createInput,
            });

            response.status(201).json(createdProduct);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async readProduct(request: Request, response: Response) {
        try {
            const { productId } = request.params;

            const foundProduct = await prisma.product.findUnique({
                where: {
                    id: productId,
                },
                include: {
                    owner: true,
                    pedido: true
                }
            });

            response.status(200).json(foundProduct);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async readAllProducts(request: Request, response: Response) {
        try {
            const products = await prisma.product.findMany({
                include: { owner: true, pedido: true }
            });

            response.status(200).json(products);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async updateProduct(request: Request, response: Response) {
        try {
            const { productId } = request.params;
            const { name, category, state, ownerId, date } = request.body;

            const updateInput: Prisma.ProductUpdateInput = {
                name: name,
                category: category,
                state: state,
                date: date,
                owner: {
                    connect: { id: ownerId }
                }
            };

            const updatedProduct = await prisma.product.update({
                where: { id: productId },
                data: updateInput,
            });

            response.status(200).json(updatedProduct);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }

    public static async deleteProduct(request: Request, response: Response) {
        try {
            const { productId } = request.params;

            const deletedProduct = await prisma.product.delete({
                where: { id: productId },
            });

            response.status(200).json(deletedProduct);
        } catch (error: any) {
            response.status(500).json({ message: error.message });
        }
    }
}
