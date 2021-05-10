import React from "react"
import {RegisterScreen} from "./register"
import {Login} from "./login"
import {Card} from "antd"
import styled from "@emotion/styled"
import {useAuth} from "../context/auth-context"
import Logo from '../assets/logo.svg'
import Right from '../assets/right.svg'
import Left from '../assets/left.svg'

export const UnauthenticatedApp = () => {
    const {isRegister} = useAuth()
    return (
        <Container>
            <Header/>
            <BackGround />
            <CardWrapper>
                {isRegister ? <RegisterScreen/> : <Login/>}
            </CardWrapper>
        </Container>
    );
};

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-position: left bottom, right bottom;
  background-image: url(${Left}), url(${Right});
`

const CardWrapper = styled(Card)`
  width: 30rem;
  min-height: 30rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
const Header = styled.header`
  background: url(${Logo}) no-repeat center;
  background-size: 8rem;
  width: 100%;
  height: 100px;
  position: absolute;
  top: calc(50% - 30rem);
`
