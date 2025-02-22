"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (<>{session?.user?.email}<br /><Button onClick={() => signOut()}>Sign Out</Button></>)
    }
    return (<><br /><Button onClick={() => signIn()}>Sign In</Button></>)
}
export default function NavMenu() {
    return (
        <header style={{ backgroundColor: '#333', padding: '10px' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ color: '#fff', margin: '0' }}>TallyUp</h1>

                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AuthButton />
                    <div style={{ marginLeft: '20px' }}>
                        <ContactDialog />
                    </div>
                    <a href="https://github.com/zsliwoski/personal-finance-tracker" style={{ color: '#fff', textDecoration: 'none', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                        <Image src="github-mark-white.svg" alt="GitHub" width={20} height={20} style={{ marginRight: '5px' }} />
                        GitHub
                    </a>
                </div>
            </nav>
        </header>
    );
}