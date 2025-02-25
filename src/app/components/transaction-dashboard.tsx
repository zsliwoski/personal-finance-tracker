"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ArrowUpIcon, CreditCard, DollarSign, FileJson, FileText, Download, Users } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    SidebarProvider,
} from "@/components/ui/sidebar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@/app/hooks/use-media-query"
import { MobileTransactions } from "./mobile-transactions"
import NavSideBar from "./side-bar"
import AppHeader from "./app-header"

const weekData = [
    { name: "Mon", total: Math.floor(Math.random() * 1000) + 500 },
    { name: "Tue", total: Math.floor(Math.random() * 1000) + 500 },
    { name: "Wed", total: Math.floor(Math.random() * 1000) + 500 },
    { name: "Thu", total: Math.floor(Math.random() * 1000) + 500 },
    { name: "Fri", total: Math.floor(Math.random() * 1000) + 500 },
    { name: "Sat", total: Math.floor(Math.random() * 1000) + 500 },
    { name: "Sun", total: Math.floor(Math.random() * 1000) + 500 },
]

const monthData = [
    { name: "Week 1", total: Math.floor(Math.random() * 5000) + 2000 },
    { name: "Week 2", total: Math.floor(Math.random() * 5000) + 2000 },
    { name: "Week 3", total: Math.floor(Math.random() * 5000) + 2000 },
    { name: "Week 4", total: Math.floor(Math.random() * 5000) + 2000 },
]

const yearData = [
    { name: "Jan", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Feb", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Mar", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Apr", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "May", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Jun", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Jul", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Aug", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Sep", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Oct", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Nov", total: Math.floor(Math.random() * 10000) + 5000 },
    { name: "Dec", total: Math.floor(Math.random() * 10000) + 5000 },
]

const threeYearData = [
    { name: "2021", total: Math.floor(Math.random() * 100000) + 50000 },
    { name: "2022", total: Math.floor(Math.random() * 100000) + 50000 },
    { name: "2023", total: Math.floor(Math.random() * 100000) + 50000 },
]

// Mock user data
const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
}

export function TransactionDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [timePeriod, setTimePeriod] = useState("week")

    const chartData = {
        week: weekData,
        month: monthData,
        year: yearData,
        "3year": threeYearData,
    }[timePeriod]

    const downloadData = (format: "json" | "csv") => {
        let content: string
        let filename: string
        let type: string

        if (format === "json") {
            content = JSON.stringify(chartData, null, 2)
            filename = `transaction-data-${timePeriod}.json`
            type = "application/json"
        } else {
            // Create CSV content
            const headers = ["name", "total"]
            const rows = chartData.map((item) => `${item.name},${item.total}`)
            content = [headers.join(","), ...rows].join("\n")
            filename = `transaction-data-${timePeriod}.csv`
            type = "text/csv"
        }

        // Create and trigger download
        const blob = new Blob([content], { type })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    return (
        <SidebarProvider defaultOpen={sidebarOpen}>
            <div className="flex h-screen overflow-hidden bg-[#f5f5f5]">
                <NavSideBar />
                <div className="flex-1 overflow-auto">
                    <AppHeader />
                    <main className="p-4 sm:p-6">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Card className="border-[#eceff1] bg-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-[#6f7476]">Total Revenue</CardTitle>
                                    <DollarSign className="h-4 w-4 text-[#b0bec5]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-[#6f7476]">$45,231.89</div>
                                    <p className="text-xs text-[#b0bec5]">+20.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[#eceff1] bg-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-[#6f7476]">Transactions</CardTitle>
                                    <CreditCard className="h-4 w-4 text-[#b0bec5]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-[#6f7476]">+2350</div>
                                    <p className="text-xs text-[#b0bec5]">+180.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[#eceff1] bg-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-[#6f7476]">Active Users</CardTitle>
                                    <Users className="h-4 w-4 text-[#b0bec5]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-[#6f7476]">+573</div>
                                    <p className="text-xs text-[#b0bec5]">+201 since last hour</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[#eceff1] bg-white">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-[#6f7476]">Conversion Rate</CardTitle>
                                    <ArrowUpIcon className="h-4 w-4 text-[#b0bec5]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-[#6f7476]">3.2%</div>
                                    <p className="text-xs text-[#b0bec5]">+2.1% from last week</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-full border-[#eceff1] bg-white lg:col-span-4">
                                <CardHeader className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
                                    <CardTitle className="text-[#6f7476]">Overview</CardTitle>
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                        <ScrollArea className="w-full sm:w-auto" orientation="horizontal">
                                            <ToggleGroup
                                                type="single"
                                                value={timePeriod}
                                                onValueChange={(value) => value && setTimePeriod(value)}
                                                className="inline-flex bg-[#f5f5f5]"
                                            >
                                                <ToggleGroupItem
                                                    value="week"
                                                    aria-label="View weekly data"
                                                    className="data-[state=on]:bg-[#77c159] data-[state=on]:text-white"
                                                >
                                                    Week
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="month"
                                                    aria-label="View monthly data"
                                                    className="data-[state=on]:bg-[#77c159] data-[state=on]:text-white"
                                                >
                                                    Month
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="year"
                                                    aria-label="View yearly data"
                                                    className="data-[state=on]:bg-[#77c159] data-[state=on]:text-white"
                                                >
                                                    Year
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="3year"
                                                    aria-label="View 3-year data"
                                                    className="data-[state=on]:bg-[#77c159] data-[state=on]:text-white"
                                                >
                                                    3 Years
                                                </ToggleGroupItem>
                                            </ToggleGroup>
                                        </ScrollArea>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full sm:w-auto border-[#eceff1] text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]"
                                                >
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Download
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="bg-white">
                                                <DropdownMenuItem
                                                    onClick={() => downloadData("json")}
                                                    className="text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]"
                                                >
                                                    <FileJson className="mr-2 h-4 w-4" />
                                                    Download JSON
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => downloadData("csv")}
                                                    className="text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]"
                                                >
                                                    <FileText className="mr-2 h-4 w-4" />
                                                    Download CSV
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[350px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={chartData}>
                                                <XAxis
                                                    dataKey="name"
                                                    stroke="#b0bec5"
                                                    fontSize={12}
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tickFormatter={(value) => value.toString().slice(0, 3)}
                                                />
                                                <YAxis
                                                    stroke="#b0bec5"
                                                    fontSize={12}
                                                    tickLine={false}
                                                    axisLine={false}
                                                    tickFormatter={(value) => `$${value}`}
                                                />
                                                <Bar dataKey="total" fill="#77c159" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="col-span-full border-[#eceff1] bg-white lg:col-span-3">
                                <CardHeader>
                                    <CardTitle className="text-[#6f7476]">Recent Transactions</CardTitle>
                                    <CardDescription className="text-[#b0bec5]">You made 265 transactions this month.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {useMediaQuery("(min-width: 768px)") ? (
                                        <ScrollArea className="w-full" orientation="horizontal">
                                            <div className="min-w-[600px]">
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow className="border-[#eceff1]">
                                                            <TableHead className="w-[100px] text-[#b0bec5]">Transaction</TableHead>
                                                            <TableHead className="text-[#b0bec5]">Status</TableHead>
                                                            <TableHead className="text-[#b0bec5]">Date</TableHead>
                                                            <TableHead className="text-right text-[#b0bec5]">Amount</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {recentTransactions.map((transaction) => (
                                                            <TableRow key={transaction.id} className="border-[#eceff1]">
                                                                <TableCell className="font-medium text-[#6f7476]">{transaction.id}</TableCell>
                                                                <TableCell>
                                                                    <span
                                                                        className={cn(
                                                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                                                            transaction.status === "complete"
                                                                                ? "bg-[#77c159]/10 text-[#77c159]"
                                                                                : transaction.status === "processing"
                                                                                    ? "bg-[#b0bec5]/10 text-[#6f7476]"
                                                                                    : "bg-red-100 text-red-800",
                                                                        )}
                                                                    >
                                                                        {transaction.status}
                                                                    </span>
                                                                </TableCell>
                                                                <TableCell className="text-[#6f7476]">{transaction.date}</TableCell>
                                                                <TableCell className="text-right text-[#6f7476]">{transaction.amount}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </ScrollArea>
                                    ) : (
                                        <MobileTransactions transactions={recentTransactions} />
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

const recentTransactions = [
    {
        id: "TX123",
        status: "complete",
        date: "2023-06-14",
        amount: "$250.00",
    },
    {
        id: "TX124",
        status: "processing",
        date: "2023-06-13",
        amount: "$1,000.00",
    },
    {
        id: "TX125",
        status: "failed",
        date: "2023-06-12",
        amount: "$150.00",
    },
    {
        id: "TX126",
        status: "complete",
        date: "2023-06-11",
        amount: "$500.00",
    },
    {
        id: "TX127",
        status: "complete",
        date: "2023-06-10",
        amount: "$750.00",
    },
]

