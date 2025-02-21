import { prisma } from "@/app/lib/db";

export default async function TransactionPage({ params }) {
    const { id } = await params;
    const transaction = await prisma.transaction.findUnique({
        where: {
            id,
        }
    });
    return (
        <div>
            {transaction?.comment}
        </div>
    );
}
