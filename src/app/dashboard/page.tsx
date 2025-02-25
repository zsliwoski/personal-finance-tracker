"use client"
import { useSession } from "next-auth/react"
import NavMenu from "../components/NavMenu"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TransactionChart } from "../components/TransactionChart";

export default function Dashboard() {
    const { data: session } = useSession()
    return (
        <div>
            <NavMenu />
            <h1>Dashboard</h1>
            <p>Welcome, {session?.user?.email}</p>
            <TransactionChart />
        </div>
    )
}