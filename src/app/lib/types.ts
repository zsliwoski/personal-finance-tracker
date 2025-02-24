import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().nullable().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    image: z.string().nullable().optional(),
});

export const transactionSchema = z.object({
    comment: z.string().nullable().optional(),
    amount: z.string().transform((val: string) => parseInt(val)).refine((val) => !isNaN(val), "Invalid amount"),
    type: z.string().transform((val: string) => parseInt(val)).refine((val) => !isNaN(val), "Invalid type"),
    category: z.string().transform((val: string) => parseInt(val)).refine((val) => !isNaN(val), "Invalid category"),
});

export const contactSchema = z.object({
    subject: z.string().min(6, "Subject must be at least 6 characters long").max(50, "Subject must be at most 50 characters long"),
    email: z.string().email("Invalid email address").max(50, "Email must be at most 50 characters long"),
    message: z.string().min(10, "Message must be at least 10 characters long").max(500, "Message must be at most 500 characters long"),
});