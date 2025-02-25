import { cn } from "@/lib/utils"

interface Transaction {
    id: string
    status: string
    date: string
    amount: string
}

export function MobileTransactions({ transactions }: { transactions: Transaction[] }) {
    return (
        <div className="space-y-2">
            {transactions.map((transaction) => (
                <div
                    key={transaction.id}
                    className="flex items-center justify-between rounded-lg border border-[#eceff1] bg-white p-3"
                >
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-[#6f7476]">{transaction.id}</span>
                            <span
                                className={cn(
                                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                    transaction.status === "complete"
                                        ? "bg-[#77c159]/10 text-[#77c159]"
                                        : transaction.status === "processing"
                                            ? "bg-[#b0bec5]/10 text-[#6f7476]"
                                            : "bg-red-100 text-red-800",
                                )}
                            >
                                {transaction.status}
                            </span>
                        </div>
                        <span className="text-xs text-[#b0bec5]">{transaction.date}</span>
                    </div>
                    <span className="font-medium text-[#6f7476]">{transaction.amount}</span>
                </div>
            ))}
        </div>
    )
}

