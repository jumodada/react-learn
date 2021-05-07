import qs from "qs";
import {logout} from "../auth-provider";
import {useAuth} from "../context/auth-context";

const root = process.env.REACT_APP_API_URL

export const request = async (url: string, {data, token, headers, ...customConfig}: any = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : ''
        },
        ...customConfig
    }
    if (config.method.toLowerCase() === 'get') {
        url += data ? (`?${qs.stringify(data)}`) : ''

    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${root}/${url}`, config).then(async res => {
        if (res.status === 401) {
            await logout()
            window.location.reload()
            return Promise.reject({msg: '请重新登录'})
        }
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}


export function useRequest() {
    const {user} = useAuth()
    return (...[url, config]  : Parameters<typeof request>) => request(url, {...config, token: user.token})
}
