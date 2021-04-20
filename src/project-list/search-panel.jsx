import {useEffect, useState} from "react";

export const searchPanel = ()=>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [users,setUsers] = useState([])
    const [lists,setLists] = useState([])
    useEffect(()=>{
        fetch('').then(res=>{
            if(res.ok){
                setLists(res.json())
            }
        })
    },[param])
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={e=>{setParam({...param,name: e.target.value})}}/>
            <select name="" id="" value={param.personId} onChange={e=>{setParam({...param,personId: e.target.value})}}>
                <options valu={''}>负责人</options>
                {
                    users.map(user=>{
                        <option value={user.id}>
                            {user.name}
                        </option>
                    })
                }
            </select>
        </div>
    </form>
}
