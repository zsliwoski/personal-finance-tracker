"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { SignUpDialog } from "./sign-up-dialog"

export function SignInForm() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
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
                    disabled={isLoading}
                    className="border-[#eceff1]"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password" className="text-[#6f7476]">
                    Password
                </Label>
                <Input id="password" type="password" disabled={isLoading} className="border-[#eceff1]" required />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="remember"
                        className="border-[#eceff1] data-[state=checked]:bg-[#77c159] data-[state=checked]:border-[#77c159]"
                    />
                    <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none text-[#6f7476] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <Button variant="link" className="text-[#77c159] hover:text-[#77c159]/90" type="button">
                    Forgot password?
                </Button>
            </div>
            <Button className="w-full bg-[#77c159] text-white hover:bg-[#77c159]/90" type="submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <div className="text-center text-sm">
                <span className="text-[#b0bec5]">Don&apos;t have an account? </span>
                <SignUpDialog />
            </div>
        </form>
    )
}

