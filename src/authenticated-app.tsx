import React  from "react";
import {ProjectListScreen} from "./views/project-list";
import {useAuth} from "./context/auth-context";
import {Button, Dropdown, Menu} from "antd";
import styled from "@emotion/styled"
import {Row} from "./components/lib"
import {ReactComponent as Logo} from './assets/software-logo.svg'
import {Navigate, Route, Routes} from "react-router"
import {BrowserRouter as Router} from "react-router-dom"
import {ProjectScreen} from "./views/project-screen"
import {resetRoute} from "./utils"
import {ProjectModel} from "./views/project-list/project-model"
import {ProjectPopover} from "./components/project-popover"

export const AuthenticatedApp = () => {

    return (
        <Wrapper>
            <PageHeader/>
            <Main>
                <Router>
                    <Routes>
                        <Route path={'/projects'} element={<ProjectListScreen/>}/>
                        <Route path={'/projects/:projectId/*'} element={< ProjectScreen/>}/>
                        <Navigate to={'/projects'}/>
                    </Routes>
                </Router>
            </Main>
            <ProjectModel />
        </Wrapper>
    );

};
const PageHeader = () => {
    const {logout, user} = useAuth();
    return <Header padding={2} between={true}>
        <HeaderLeft gap={true}>
            <Button type={'link'}>
                <Logo width={'15rem'} onClick={resetRoute}/>
            </Button>
            <ProjectPopover/>
            <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
            <Dropdown overlay={<Menu>
                <Menu.Item key={'logout'}>
                    <Button type={'link'} onClick={logout}>登出</Button>
                </Menu.Item>
            </Menu>}>
                <div onClick={e => e.preventDefault()}>
                    Hi, {user.name}
                </div>
            </Dropdown>
        </HeaderRight>
    </Header>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Header = styled(Row)`
  height: 6rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 1
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``


const Main = styled.main`
  height: calc(100vh - 6rem);
`
