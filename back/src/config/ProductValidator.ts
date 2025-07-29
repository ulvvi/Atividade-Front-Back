import z from "zod";

const user = z.object({
    name: z.string("name should be a string").min(1, "Name is required"),
    email: z.email("Invalid email format"),
    phone: z.string("phone should be a string").min(10, "Phone number must be at least 10 characters long"),
    age: z.number("age should be a number").int("Age must be an integer").min(0, "Age cannot be negative"),
    adress: z.string("address should be a string").min(1, "Address is required"),
    validatedVendor: z.boolean().optional(),
});

const createUser = user
const readuser = user
const userParams = z.object({
    userId: z.uuid()
});

export default {
    createUser,
    readuser,
    userParams
}

