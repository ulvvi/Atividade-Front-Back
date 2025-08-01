import z from "zod";

const user = z.object({
    name: z.string("O nome deve ser uma string").min(1, "É necessário um nome").max(50,"Maximo de caracteres do nome é 50"),
    email: z.email("Formato de email inválido"),
    CPF: z.string("CPF deve ser uma string").max(14,"o CPF deve conter 14 caracteres no formato: 'xxx.xxx.xxx-xx'")
    .min(14,"o CPF deve conter 14 caracteres no formato: 'xxx.xxx.xxx-xx'"),
    phone: z.e164("o telefone deve estar no formato +55AABBBBBBBBB"),
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

