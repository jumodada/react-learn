import './wdyr'
import React from "react";
import "./App.css";
import {useAuth} from "./context/auth-context";
import {AuthenticatedApp} from "./authenticated-app";
import {UnauthenticatedApp} from "./unauthenticated-app";
import 'antd/dist/antd.less'
import styled from "@emotion/styled";
import {ErrorBoundary} from "./components/error-boundary";
import {FullPageErrorFallback} from "./components/lib";

function App() {
    const {user} = useAuth();
    return (
        <Wrapper className="App">
            <ErrorBoundary fallbackRender={FullPageErrorFallback}>
                {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </ErrorBoundary>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
