import { SessionProvider } from "next-auth/react";

interface AuthSessionProviderProps {
    children: React.ReactNode
}

export default function AuthSessionProvider ({ children }: AuthSessionProviderProps) {
    return <SessionProvider>{children}</SessionProvider>;
}