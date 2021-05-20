import {useEffect, useState} from "react";
import { useMount} from "../../utils";
import {useAsync} from "../../utils/useAsync";
import {useRequest} from "../../fetch";
import {EditLists, GetProjectLists} from "../../fetch/project";

export const useProjects = (param?: any) => {
    const {run, ...result} = useAsync()
    const [users, setUsers] = useState([])
    useEffect(() => {
        run(GetProjectLists(client,param))
    }, [param])

    const client = useRequest()
    useMount(() => {
        client('users').then(res => {
            setUsers(() => res)
        })
    })
    return {
        ...result, users, mutate(params: any, pin: boolean) {
            return run(EditLists(client,params,pin))
        },
    }
}

// export function useEditProject() {
//     const {run, ...asyncParams} = useAsync()
//     const client = useRequest()
//     return {
//         mutate(params: any, pin: boolean) {
//             return run(() => client(`projects/${params.id}`, {
//                 data: {
//                     ...params,
//                     pin
//                 },
//                 method: 'PATCH'
//             }))
//         },
//         ...asyncParams
//     }
// }
//
