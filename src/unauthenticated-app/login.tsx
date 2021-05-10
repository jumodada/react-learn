import React from "react";
import {useAuth} from "../context/auth-context";
import {Button, Divider, Form, Input} from "antd";
import styled from "@emotion/styled";


export const Login = () => {
    const {login, setLoginStatus} = useAuth();

    const handleSubmit = ({username, password}: any) => {

        login({username, password});
    };

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                <Input placeholder={'用户名'} type="text" id={"username"}/>
            </Form.Item>
            <Form.Item name={'password'} rules={[{required: true, message: '请输入用密码'}]}>
                <Input type="password" id={"password"}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'} type={"primary"}>登录</Button>
                <RegisterDivider>
                    <div onClick={() => setLoginStatus(false)}>
                        没有账号? 注册新账号
                    </div>
                </RegisterDivider>
            </Form.Item>
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
