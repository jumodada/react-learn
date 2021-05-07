import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import { useRequest} from "../../fetch";

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([]);

    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const debouncedParam = useDebounce(param, 200);
    const [list, setList] = useState([]);
    const client = useRequest()
    useEffect(() => {
        client('projects', {data: cleanObject(debouncedParam)}).then(res => {
            setList(() => res)
        })
    }, [debouncedParam]);

    useMount(() => {

        client('users').then(res => {
            setUsers(() => res)
        })
    });

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    );
};
