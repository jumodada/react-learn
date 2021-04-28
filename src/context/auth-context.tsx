import React, {useState} from "react";
import {Login, Logout, Register} from "../auth-provider";

const AuthContext = React.createContext<any>(undefined)

export const AuthProvider = () => {
    const [user, setUser] = useState<any>(null)
    const login = (form: any) => Login(form).then(user => setUser(user))
    const register = (form: any) => Register(form).then(user => setUser(user))
    const logout = () => Logout().then(()=>setUser(null))
    return <AuthContext.Provider value={{user,login,register,logout}} />
}


export const UseAuth = ()=>{
    const context  = React.useContext(AuthContext)
    if(!context){
        throw new Error('silence wench')
    }
    return context
}
