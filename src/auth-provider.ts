import {login, register} from "./fetch";

const localStorageKey = '__auth_provider_token__'


export default function () {
    window.localStorage.getItem(localStorageKey)
}

export function handlerUserResponse({user}: any) {
    window.localStorage.setItem(localStorageKey, user.token || '')
}

export  function Login({username, password}: any){
    return   login({username, password}).then(async res=>{
       if(res.ok){
           return handlerUserResponse(await res.json())
       }
    })
}

export  function Register({username, password}: any){
    return   register({username, password}).then(async res=>{
        if(res.ok){
            return handlerUserResponse(await res.json())
        }else{
             return Promise.reject()
        }
    })
}


export  function Logout(){
    window.localStorage.removeItem(localStorageKey)
    return Promise.resolve()
}
