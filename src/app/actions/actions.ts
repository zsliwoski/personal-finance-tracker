'use server'
import { Prisma } from "@prisma/client"
import { prisma } from "../lib/db"
import { hash } from "argon2"
import { userSchema, transactionSchema } from "../lib/types";

export async function postTransaction(formData: FormData) {
    const parsedData = transactionSchema.safeParse({
        comment: formData.get("comment"),
        amount: formData.get("amount"),
        type: formData.get("type"),
        category: formData.get("category"),
    });

    if (!parsedData.success) {
        console.error("Validation errors:", parsedData.error.errors);
        return;
    }

    try {
        await prisma.transaction.create({
            data: {
                comment: parsedData.data.comment,
                amount: parsedData.data.amount,
                type: parsedData.data.type,
                category: parsedData.data.category,
            }
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Handle known Prisma errors
            if (error.code === 'P2002') {
                console.error('There is a unique constraint violation, a transaction cannot be created with this data');
            } else {
                console.error('Prisma error code:', error.code);
            }
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

export async function createCredentialsUser(formData: FormData) {
    try {
        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            image: formData.get("image"),
        };

        const parsedData = userSchema.safeParse(userData);

        if (!parsedData.success) {
            console.error("Validation errors:", parsedData.error.errors);
            return;
        }

        const hashedPassword = await hash(formData.get("password") as string);

        await prisma.user.create({
            data: {
                name: parsedData.data.name,
                email: parsedData.data.email,
                password: hashedPassword,
                role: 0, // default role
                image: parsedData.data.image || null, // add image property
            }
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a PrismaClientKnownRequestError
            if (error.code === 'P2002') {
                console.error('There is a unique constraint violation, a new user cannot be created with this email');
            } else {
                console.error('Prisma error code:', error.code);
            }
        } else {
            console.error('Unexpected error:', error);
        }
    }
}
