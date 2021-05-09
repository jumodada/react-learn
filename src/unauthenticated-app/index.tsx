import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { Login } from "./login";
import {Button} from "antd";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      {isRegister ? <RegisterScreen /> : <Login />}
      <Button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </Button>
    </div>
  );
};
