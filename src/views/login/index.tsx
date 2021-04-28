import React, {FormEvent} from "react"
import {getProjectLists, login} from "../../fetch";

export function Login() {

    function toLogin(){
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password}).then(res=>{
            console.log(res)
        })
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
            用户名
        </label>
        <input type="text" id={'username'}/>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={'password'}/>
        </div>
        <button type={'submit'}>登录</button>
    </form>
}
