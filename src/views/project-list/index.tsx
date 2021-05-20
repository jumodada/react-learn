import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useDebounce, useDocumentTitle} from "../../utils";
import styled from "@emotion/styled"
import {useProjects} from "./project";
import {useUrlQueryParam} from "../../utils/url";

export const ProjectListScreen = () => {
    const [param, setParam] = useUrlQueryParam()
    const {isLoading, data: list, users, retry, mutate} = useProjects(useDebounce(param, 200))
    useDocumentTitle('项目列表', false)
    return (
        <Wrapper>
            <h1>项目经验</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List mutate={mutate} loading={isLoading} users={users} list={list} retry={retry}/>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  padding: 2rem;
`
