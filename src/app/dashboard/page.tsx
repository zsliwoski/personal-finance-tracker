"use client"
import { useSession } from "next-auth/react"
import NavMenu from "../components/NavMenu"


export default function Dashboard() {
    const { data: session } = useSession()
    return (
        <div>
            <NavMenu />
            <h1>Dashboard</h1>
            <p>Welcome, {session?.user?.email}</p>
        </div>
    )
}