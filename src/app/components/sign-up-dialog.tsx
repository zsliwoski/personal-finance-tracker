"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreditCard } from "lucide-react"

export function SignUpDialog() {
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setOpen(false) // Close dialog after successful signup
        }, 1500)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="link" className="text-[#77c159] hover:text-[#77c159]/90">
                    Sign up
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <CreditCard className="h-6 w-6 text-[#77c159]" />
                        <DialogTitle className="text-[#6f7476]">Create an account</DialogTitle>
                    </div>
                    <DialogDescription className="text-[#b0bec5]">
                        Enter your details to create your TallyUp account
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-[#6f7476]">
                                    First name
                                </Label>
                                <Input id="firstName" placeholder="John" className="border-[#eceff1]" disabled={isLoading} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-[#6f7476]">
                                    Last name
                                </Label>
                                <Input id="lastName" placeholder="Doe" className="border-[#eceff1]" disabled={isLoading} required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[#6f7476]">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                className="border-[#eceff1]"
                                disabled={isLoading}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-[#6f7476]">
                                Password
                            </Label>
                            <Input id="password" type="password" className="border-[#eceff1]" disabled={isLoading} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-[#6f7476]">
                                Confirm password
                            </Label>
                            <Input id="confirmPassword" type="password" className="border-[#eceff1]" disabled={isLoading} required />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full bg-[#77c159] text-white hover:bg-[#77c159]/90" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Create account"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

