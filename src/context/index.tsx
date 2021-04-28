import {AuthProvider} from "./auth-context";

export function AppProviders({children}: any) {
    // @ts-ignore
    return <AuthProvider>
        {children}
    </AuthProvider>
}
