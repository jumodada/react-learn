import React from "react";
import {ProjectListScreen} from "./views/project-list";
import {useAuth} from "./context/auth-context";
import {Button, Dropdown, Menu} from "antd";
import styled from "@emotion/styled"
import {Row} from "./components/lib"
import {ReactComponent as Logo} from './assets/software-logo.svg'


export const AuthenticatedApp = () => {
    const {logout, user} = useAuth();
    return (
        <Wrapper>
            <Header padding={2} between={true}>
                <HeaderLeft gap={true}>
                    <Logo width={'15rem'}/>
                    <h3>项目</h3>
                    <h3>用户</h3>
                </HeaderLeft>
                <HeaderRight>
                    <Dropdown overlay={<Menu>
                        <Menu.Item key={'logout'}>
                            <Button type={'link'} onClick={logout}>登出</Button>
                        </Menu.Item>
                    </Menu>}>
                        <div onClick={e=>e.preventDefault()}>
                            Hi, {user.name}
                        </div>
                    </Dropdown>
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
  box-shadow:  0 0 5px 0 rgba(0,0,0, 0.2);
  z-index: 1
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``


const Main = styled.main`
  height: calc(100vh - 6rem);
`
