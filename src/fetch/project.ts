import {cleanObject} from "../utils";
export function GetProjectLists(client: any,param: any) {
    return ()=>client('projects', {data: cleanObject(param || {})})
}


export function EditLists(client:any,params: any, pin: boolean) {
    return ()=>client(`projects/${params.id}`, {
        data: {
            ...params,
            pin
        },
        method: 'PATCH'
    })
}
