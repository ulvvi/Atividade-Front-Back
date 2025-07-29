import z from "zod";

const pedido = z.object({
    price : z.number("price should be a number").min(0, "Price cannot be negative"),
    state: z.enum(["Em andamento", "Completado", "Cancelado"], "status should be one of PENDING, COMPLETED, or CANCELED"),
    date: z.string("date should be a string").min(1, "Date is required"),
    userId: z.string("userId should be a string").uuid("Invalid userId format"),
    products: z.array(z.object({
        productId: z.string("productId should be a string").uuid("Invalid productId format"),
    })).min(1, "At least one product is required"),
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

