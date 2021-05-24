import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useDebounce, useDocumentTitle} from "../../utils";
import styled from "@emotion/styled"
import {useProjects} from "./project";
import {useUrlQueryParam} from "../../utils/url";
import {Button, Row} from "antd";
import {useDispatch} from "react-redux";
import {projectListActions} from "./project-list.slice";

export const ProjectListScreen = () => {
    const [param, setParam] = useUrlQueryParam()
    const dispatch = useDispatch()
    const openModel = () => dispatch(projectListActions.openProjectModal())
    const {isLoading, data, users, retry, mutate} = useProjects(useDebounce(param, 200))
    useDocumentTitle('项目列表', false)
    return (
        <Wrapper>
            <Row justify={'space-between'}>
                <h1>项目列表</h1>
                <Button onClick={openModel}>创建项目</Button>
            </Row>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List openModel={openModel} mutate={mutate} loading={isLoading} users={users} list={data} retry={retry}/>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  padding: 2rem;
`
