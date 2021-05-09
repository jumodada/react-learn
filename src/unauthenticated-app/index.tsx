import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { Login } from "./login";
import {Button, Card} from "antd";
import styled from "@emotion/styled";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
    <Card>
      {isRegister ? <RegisterScreen /> : <Login />}
      <Button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </Button>
    </Card>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
