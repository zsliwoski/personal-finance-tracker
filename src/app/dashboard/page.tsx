"use client"
import { useSession } from "next-auth/react"
import { TransactionDashboard } from "../components/transaction-dashboard";

export default function Dashboard() {
    const { data: session } = useSession()
    return (
        <TransactionDashboard />
    )
}