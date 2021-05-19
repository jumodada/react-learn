import {useEffect, useState} from "react";
import {cleanObject, useMount} from "../../utils";
import {useAsync} from "../../utils/useAsync";
import {useRequest} from "../../fetch";

export const useProjects = (param?: any)=>{
    const {run,...result} = useAsync()
    const client = useRequest()
    const [users, setUsers] = useState([])
    useEffect(() => {
        run(()=>client('projects', {data: cleanObject(param || {})}))
    }, [param])

    useMount(() => {
        client('users').then(res => {
            setUsers(() => res)
        })
    })

    return {...result, users}
}

export function useEditProject() {
    const {run,...asyncParams} = useAsync()
    const client = useRequest()
    return {
        mutate(params: any,pin: boolean) {
            return run(()=>client(`projects/${params.id}`,{
                data: {
                    ...params,
                    pin
                },
                method: 'PATCH'
            }))
        },
        ...asyncParams
    }
}
