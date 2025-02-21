'use server'

import { prisma } from "../lib/db"


export async function postTransaction(formData: FormData) {
    try {
        await prisma.transaction.create({
            data: {
                comment: formData.get("comment") as string,
                amount: parseInt(formData.get("amount")) as number,
                type: parseInt(formData.get("type")) as number,
                category: parseInt(formData.get("category")) as number,
            }
        });
    } catch (error) {
        console.error(error);
        // TODO: Prisma error codes
    }
}

export async function createCredentialsUser(formData: FormData) {
    /*try {
        const password = argon2.hashedPassword(formData.get("password"))
        await prisma.user.create({
            data: {
                comment: formData.get("comment") as string,
                amount: parseInt(formData.get("amount")) as number,
                type: parseInt(formData.get("type")) as number,
                category: parseInt(formData.get("category")) as number,
            }
        });
    } catch (error) {
        console.error(error);
        // TODO: Prisma error codes
    }*/
}
