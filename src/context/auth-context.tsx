import React, {useState} from "react";
import * as auth from "../auth-provider";
import {request} from "../fetch";
import {useMount} from "../utils";
import {useAsync} from "../utils/useAsync";
import {FullScreenLoading} from "../components/lib";


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
    const  {data: user, setData: setUser, isLoading, run} = useAsync()
    console.log(isLoading)
    const [isRegister, setIsRegister] = useState(false);
    const login = (form: any) => run(()=>auth.LoginOrRegister(form)).then(setUser)
    const register = (form: any) => run(()=>auth.LoginOrRegister(form, 'register')).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    useMount(() => {
        run(bootstrapUser).then(setUser)
    })
    const setLoginStatus = () => setIsRegister(!isRegister)
    if(isLoading){
        return <FullScreenLoading />
    }
    return (
        <AuthContext.Provider
            children={children}
            value={{user, login, register, logout, isRegister, setLoginStatus, isLoading}}
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


