import React from "react";
import {ProjectListScreen} from "./views/project-list";
import {useAuth} from "./context/auth-context";
import {Button} from "antd";
import styled from "@emotion/styled"
import {Row} from "./components/lib"

export const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return (
        <Wrapper>
            <Header padding={2} between={true}>
                <HeaderLeft gap={true}>
                    <h2>Logo</h2>
                    <h2>项目</h2>
                    <h2>用户</h2>
                </HeaderLeft>
                <HeaderRight>
                    <Button type={'primary'} onClick={logout}>登出</Button>
                </HeaderRight>
            </Header>
            <Main>
                <ProjectListScreen/>
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Header = styled(Row)`
  height: 6rem;
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``


const Main = styled.main`
  height: calc(100vh - 6rem);
`
