import React from "react";
import { ProjectListScreen } from "./views/project-list";
import { useAuth } from "./context/auth-context";
import {Button} from "antd";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Wrapper>
        <ProjectListScreen />
        <Button type={'primary'} onClick={logout}>登出</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
