import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { userSchema } from "../lib/types"
import { DescriptiveCheckbox } from "./DescriptiveCheckbox"


export function SignUpDialog() {
    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
        },
    })
    function onSubmit(values: z.infer<typeof userSchema>) {
        console.log(values)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="color" variant="link">Sign Up</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create Account</DialogTitle>
                    <DialogDescription>
                        * indicates required fields
                    </DialogDescription>
                </DialogHeader>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border" />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email *</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password *</FormLabel>
                                    <FormControl>
                                        <Input type="password"{...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border margin-top:20" />
                        <div className="relative space-y-4">
                            <DescriptiveCheckbox id="terms" label="Accept terms and conditions" description="You agree to our Terms of Service and Privacy Policy." />
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>

            </DialogContent>
        </Dialog >
    )
}