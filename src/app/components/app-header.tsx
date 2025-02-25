import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function AppHeader() {
    return (<header className="sticky top-0 z-10 flex min-h-16 flex-wrap items-center border-b border-[#eceff1] bg-white px-4 sm:px-6">
        <div className="flex w-full flex-1 items-center gap-4">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159]" />
                <div className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-[#77c159]" />
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-none text-[#6f7476]">TallyUp</h1>
                        <p className="text-sm text-[#b0bec5]">Transaction Dashboard</p>
                    </div>
                </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="hidden border-[#eceff1] text-[#6f7476] hover:bg-[#f5f5f5] hover:text-[#77c159] sm:inline-flex"
                >
                    Need Help?
                </Button>
                <Button size="sm" className="whitespace-nowrap bg-[#77c159] text-white hover:bg-[#77c159]/90">
                    Upgrade Plan
                </Button>
            </div>
        </div>
    </header>);
}