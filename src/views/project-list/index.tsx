import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import { useState} from "react";
import {useDebounce, useDocumentTitle} from "../../utils";
import styled from "@emotion/styled"
import {useProjects} from "./project";

export const ProjectListScreen = () => {

    const [param, setParam] = useState({
        name: "",
        personId: "",
    });

    const debouncedParam = useDebounce(param, 200);
    const {isLoading,data: list, users} = useProjects(debouncedParam)

    useDocumentTitle('项目列表', false)
    return (
        <Wrapper>
            <h1>项目经验</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List loading={isLoading} users={users} list={list}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  padding: 2rem;
`
