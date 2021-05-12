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
        if(!data) return
        user = data.user
    }
    return user
}

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<any>(null);
    const [isRegister, setIsRegister] = useState(false);
    const login = (form: any) => auth.LoginOrRegister(form).then(setUser);
    const register = (form: any) => auth.LoginOrRegister(form, 'register').then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    useMount(() => {
        bootstrapUser().then(setUser)
    })
    const setLoginStatus = () => setIsRegister(!isRegister)
    return (
        <AuthContext.Provider
            children={children}
            value={{user, login, register, logout, isRegister, setLoginStatus}}
        />
    );
};


export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("hooks error");
    }
    return context;
}


