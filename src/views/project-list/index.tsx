import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import {useRequest} from "../../fetch";
import styled from "@emotion/styled"

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([]);

    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [loading, setLoading] = useState(false)

    const debouncedParam = useDebounce(param, 200);
    const [list, setList] = useState([]);
    const client = useRequest()
    useEffect(() => {
        setLoading(true)
        client('projects', {data: cleanObject(debouncedParam)}).then(setList).finally(() => setLoading(false))
    }, [debouncedParam]);

    useMount(() => {
        client('users').then(res => {
            setUsers(() => res)
        })
    });

    return (
        <Wrapper>
            <h1>项目经验</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List loading={loading} users={users} list={list}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  padding: 2rem;
`
