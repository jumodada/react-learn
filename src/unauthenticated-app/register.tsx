import React from "react";
import { useAuth } from "../context/auth-context";
import {Button, Divider, Form, Input} from "antd";
import styled from "@emotion/styled";


export const RegisterScreen = () => {
  const { register, setLoginStatus } = useAuth()

  const handleSubmit = ({ username, password }: any) => {
    register({ username, password });
  };

  return (
    <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required: true,message: '请输入用户名'}]}>
            <Input placeholder={'用户名'} type="text" id={"username"} />
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true,message: '请输入用密码'}]}>
            <Input type="password" id={"password"} />
        </Form.Item>
        <Form.Item >
            <Button htmlType={'submit'} type={"primary"}>注册</Button>
        </Form.Item>
        <RegisterDivider>
            <div onClick={() => setLoginStatus(false)}>
                已有账号，请登录
            </div>
        </RegisterDivider>
    </Form>
  );
};
const RegisterDivider = styled(Divider)`
  span {
    color: #878686;
    cursor: pointer;
    font-size: 14px;
  }
`
