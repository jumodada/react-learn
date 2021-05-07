import React, {useState} from "react";
import * as auth from "../auth-provider";
import {request} from "../fetch";
import {useMount} from "../utils";


const AuthContext = React.createContext<any>(undefined);

const bootstrapUser = async () => {
    let user = null
    const token = auth.getToken()
    if (token) {
        const data = await request('me', {token})
        user = data.user
    }
    return user
}

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<any>(null);

    const login = (form: any) => auth.login(form).then(setUser);
    const register = (form: any) => auth.register(form).then(setUser);
    const logout = () => auth.logout().then(() => setUser(null));

    useMount(() => {
        bootstrapUser().then(setUser)
    })
    return (
        <AuthContext.Provider
            children={children}
            value={{user, login, register, logout}}
        />
    );
};

export const Test = ({children}: any) => {
    const [user, setUser] = useState<any>({
        token: 'fuck'
    });

    const login = (form: any) => auth.login(form).then(setUser);
    const register = (form: any) => auth.register(form).then(setUser);
    const logout = () => auth.logout().then(() => setUser(null));

    useMount(() => {

    })
    return (
        <AuthContext.Provider
            children={children}
            value={{user, login, register, logout}}
        />
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("hooks error");
    }
    return context;
};
