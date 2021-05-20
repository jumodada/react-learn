import {cleanObject} from "../utils";
export function GetProjectLists(client: any,param: any) {
    return ()=>client('projects', {data: cleanObject(param || {})})
}


export function EditLists(client:any) {
    return (params: any, pin: boolean)=>client(`projects/${params.id}`, {
        data: {
            ...params,
            pin
        },
        method: 'PATCH'
    })
}
