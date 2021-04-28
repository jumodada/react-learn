import React, {FormEvent} from "react"

export function Login() {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        //const {login, user} = UseAuth()
        //login({username, password})
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
            用户名
        </label>
        <input type="text" id={'username'}/>
        <div children={<>
            <label htmlFor="password">密码</label>
            <input type="password" id={'password'}/>
        </>}/>
        <button type={'submit'}>登录</button>
    </form>
}
