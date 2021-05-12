import React from "react";
import {useAuth} from "../context/auth-context";
import {Button, Divider, Form, Input} from "antd";
import styled from "@emotion/styled";

const text: any = {
    true: {
        loginText: '登录',
        toggleText: '没有账号? 注册新账号'
    },
    false: {
        loginText: '注册',
        toggleText: '已有账号，请登录'
    }
}
export const useLogin = (isLogin = true) => {
    return function useLoginOrRegister() {
        const {login, setLoginStatus, register} = useAuth()
        const submit = isLogin ? login : register
        const handleSubmit = ({username, password}: any) => {
            submit({username, password});
        };

        const htmlText = text[String(isLogin)]
        return (
            <Form onFinish={handleSubmit}>
                <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                    <Input placeholder={'用户名'} type="text" id={"username"}/>
                </Form.Item>
                <Form.Item name={'password'} rules={[{required: true, message: '请输入用密码'}]}>
                    <Input type="password" id={"password"}/>
                </Form.Item>
                <Form.Item>
                    <LongButton htmlType={'submit'} type={"primary"}>{htmlText.loginText}</LongButton>
                    <RegisterDivider>
                        <div onClick={() => setLoginStatus(false)}>
                            {htmlText.toggleText}
                        </div>
                    </RegisterDivider>
                </Form.Item>
            </Form>
        );
    }
};

const LongButton = styled(Button)`
  width: 100%;
`

const RegisterDivider = styled(Divider)`
  span {
    color: #878686;
    cursor: pointer;
    font-size: 14px;
  }
`
