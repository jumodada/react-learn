import {useEffect, useState} from "react";
import { useMount} from "../../utils";
import {useAsync} from "../../utils/useAsync";
import {useRequest} from "../../fetch";
import {EditLists, GetProjectLists} from "../../fetch/project";

export const useProjects = (param?: any) => {
    const client = useRequest()
    const {request, ...result} = useAsync([{method: GetProjectLists(client,param),name:'lists'},{
        method: EditLists(client),
        name: 'edit'
    }])
    const [users, setUsers] = useState([])
    const [getLists,editLists] = request
    useEffect(() => {
        getLists.run()
    }, [param])
    useMount(() => {
        client('users').then(res => {
            setUsers(() => res)
        })
    })
    console.log({...result})
    return {
        ...result, users, mutate: editLists.run,retry: getLists.run
    }
}
