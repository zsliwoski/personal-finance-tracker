"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function DescriptiveCheckbox({ id, label, description: description, defaultValue }: { id: string, label: string, description: string, defaultValue: boolean }) {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox id={id} defaultValue={defaultValue} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    )
}