import qs from "qs";
import {cleanObject} from "../utils"

const apiUrl = process.env.REACT_APP_API_URL

function request(url: string,config:any, params?: any) {
    let requestUrl =`${apiUrl}/${url}`
    if(params){
        requestUrl += `?${qs.stringify(cleanObject(params))}`
    }
    return fetch(requestUrl,config)
}

export function getProjectLists(params: any){
    return request('projects',params)
}

export function login(params: any){
    return request('login',{
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    })
}

export function register(params: any){
    return request('register',{
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    })
}
