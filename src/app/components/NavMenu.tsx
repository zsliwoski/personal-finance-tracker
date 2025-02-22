"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (<>{session?.user?.email}<br /><Button onClick={() => signOut()}>Sign Out</Button></>)
    }
    return (<><br /><Button onClick={() => signIn()}>Sign In</Button></>)
}
export default function NavMenu() {
    return (
        <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ margin: '0' }}>TallyUp</h1>

                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AuthButton />
                    <a href="#contact" style={{ color: '#fff', textDecoration: 'none', marginLeft: '20px' }}>Contact</a>
                    <a href="https://github.com/zsliwoski/personal-finance-tracker" style={{ color: '#fff', textDecoration: 'none', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                        <Image src="github-mark-white.svg" alt="GitHub" width={20} height={20} style={{ marginRight: '5px' }} />
                        GitHub
                    </a>
                </div>
            </nav>
        </header>
    );
}