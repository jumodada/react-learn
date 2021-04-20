import React from 'react'
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import qs from 'qs'
import {cleanObject, useDeBounce} from "../utils/index"
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectLists = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [lists, setLists] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if (res.ok) {
                const data = await res.json()
                setLists(data)
            }
        })
    }, [useDeBounce(param)])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                const data = await res.json()
                setUsers(data)
                console.log(data)
            }
        })
    }, [])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} lists={lists}/>
    </div>
}
