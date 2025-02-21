"use client"
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (<>{session?.user?.email}<br /><button onClick={() => signOut()}>Sign Out</button></>)
    }
    return (<><br /><button onClick={() => signIn()}>Sign In</button></>)
}
export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    );
}