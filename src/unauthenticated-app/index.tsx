import React from "react"
import { RegisterScreen } from "./register"
import { Login } from "./login"
import {Card} from "antd"
import styled from "@emotion/styled"
import {useAuth} from "../context/auth-context"

export const UnauthenticatedApp = () => {
  const {isRegister} = useAuth()
  return (
    <Container>
    <CardWrapper>
      {isRegister ? <RegisterScreen /> : <Login  />}
    </CardWrapper>
    </Container>
  );
};

const CardWrapper = styled(Card)`
  width: 30rem;
  min-height: 30rem;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
