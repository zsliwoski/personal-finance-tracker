import { CreditCard } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { UserMenu } from './user-menu';
import Link from 'next/link';

const user = {
    name: 'John Doe',
    email: 'john@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};
export default function NavSideBar() {
    return (
        <Sidebar className="border-r border-[#eceff1]/10 bg-[#4b5052]">
            <SidebarHeader className="flex h-[60px] items-center border-b border-[#eceff1]/10 px-6">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <CreditCard className="h-6 w-6 text-[#77c159]" />
                    <span className="text-white">TallyUp</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="w-full justify-start text-[#eceff1] hover:bg-[#77c159] hover:text-white">
                            Dashboard
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="w-full justify-start text-[#eceff1] hover:bg-[#77c159] hover:text-white">
                            Transactions
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="w-full justify-start text-[#eceff1] hover:bg-[#77c159] hover:text-white">
                            Accounts
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="w-full justify-start text-[#eceff1] hover:bg-[#77c159] hover:text-white">
                            Reports
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="w-full justify-start text-[#eceff1] hover:bg-[#77c159] hover:text-white">
                            Settings
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t border-[#eceff1]/10 p-4">
                <UserMenu user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}