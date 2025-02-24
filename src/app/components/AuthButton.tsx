import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (<>
            <Avatar>
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>{session?.user?.email?.at(0)?.toLocaleUpperCase()}</AvatarFallback>
            </Avatar>
            {session?.user?.email}
            <br />
            <Button onClick={() => signOut()}>Sign Out</Button>
        </>)
    }
    return (<><br /><Button onClick={() => signIn()}>Sign In</Button></>)
}