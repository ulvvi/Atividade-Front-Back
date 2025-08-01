import z from "zod";

const product = z.object({
    name: z.string("name should be a string").min(1, "Name is required"),
    category: z.string("").min(1, "É necessário um nome para o produto")
        .max(50, "O nome do produto deve ter no máximo 50 caracteres"),
    state: z.enum(["Novo", "Seminovo", "Usado"], "O status deve ser um de: Novo, Seminovo, Usado"),
    ownerId: z.uuid("Formato de ID do vendedor inválido"),
    date: z.date("formato de data inválido")
});

const createProduct = product
const editProduct = product
const productParams = z.object({
    userId: z.uuid()
});

export default {
    createProduct,
    editProduct,
    productParams
}

