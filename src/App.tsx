import React from "react";
import "./App.css";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import 'antd/dist/antd.less'
import styled from "@emotion/styled";
function App() {
  const { user } = useAuth();

  return (
    <Wrapper className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
