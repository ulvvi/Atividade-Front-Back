import z from "zod";

const pedido = z.object({
    price : z.number("o preço deve ser um numero").min(0, "o preço não pode ser negativo"),
    state: z.enum(["Em andamento", "Completado", "Cancelado"], "O status deve ser um de: Em andamento, Completado, Cancelado"),
    date: z.string("A data de postagem deve ser uma string").min(1, "É necessário a data de postagem"),
    userId: z.uuid("Formato de ID de usuário inválido"),
    products: z.array(z.object({
        productId: z.uuid("Formato de ID de produto inválido"),
    })).min(1, "É necessário pelo menos um produto"),
});

const createPedido = pedido
const readPedido = pedido
const pedidoParams = z.object({
    pedidoId: z.uuid()
});

export default {
    createPedido,
    readPedido,
    pedidoParams
}

