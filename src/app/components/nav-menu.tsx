"use client"
import Image from 'next/image';
import { ContactDialog } from "./contact-dialog";
import { AuthButton } from "./auth-button";

export default function NavMenu() {
    return (
        <header style={{ backgroundColor: '#333', padding: '10px' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ color: '#fff', margin: '0' }}>TallyUp</h1>
                    <a href="https://github.com/zsliwoski/personal-finance-tracker" style={{ color: '#fff', textDecoration: 'none', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                        <Image src="github-mark-white.svg" alt="GitHub" width={20} height={20} style={{ marginRight: '5px' }} />
                        GitHub
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AuthButton />
                    <div style={{ marginLeft: '20px' }}>
                        <ContactDialog />
                    </div>
                </div>
            </nav>
        </header>
    );
}