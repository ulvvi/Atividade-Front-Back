import z from "zod";

const user = z.object({
    name: z.string("O nome deve ser uma string").min(1, "É necessário um nome").max(50,"Maximo de caracteres do nome é 50"),
    email: z.email("Formato de email inválido"),
    phone: z.string("O número de telefone deve ser uma string")
        .min(10, "O número de telefone deve ter exatos 10 caractéres (no estilo 'xxxxx-xxxx')")
        .max(10, "O número de telefone deve ter exatos 10 caractéres (no estilo 'xxxxx-xxxx')"),
    age: z.number("A idade necessita ser um número").int("A idade deve ser um inteiro").min(18, "Só é possível criar uma conta sendo maior de idade"),
    adress: z.string("O endereço deve ser uma string").min(1, "É necessário um endereço").max(60, "O endereço deve ter no máximo 60 caracteres"),
    validatedVendor: z.boolean().optional(),
});

const createUser = user
const editUser = user
const userParams = z.object({
    userId: z.uuid()
});

export default {
    createUser,
    editUser,
    userParams
}

