import React, {useCallback, useState} from "react";
import * as auth from "../auth-provider";
import {request} from "../fetch";
import {useMount} from "../utils";
import {useAsync} from "../utils/useAsync";
import {FullScreenLoading} from "../components/lib";
import {getUser, Login, Logout, Register} from "../store/auth.slice"
import {useDispatch, useSelector} from "react-redux";

export interface AuthForm {
    username: string;
    password: string;
}

export const bootstrapUser = async () => {
    let user = null;
    const token = auth.getToken();
    if (token) {
        const data = await request("me", { token });
        user = data.user;
    }
    return user;
};

export const AuthProvider = ({ children }: { children: any }) => {
    const { error, isLoading, isIdle, isError, run } = useAsync();
    const dispatch: (...args: unknown[]) => Promise<any> = useDispatch();

    useMount(() => {
        run(dispatch(bootstrapUser()));
    });

    if (isIdle || isLoading) {
        return <FullScreenLoading />;
    }

    return <div>{children}</div>;
};

export const useAuth = () => {
    const dispatch: (...args: unknown[]) => Promise<any> = useDispatch();
    const user = useSelector(getUser);
    const login = useCallback(
        (form: AuthForm) => dispatch(Login(form)),
        [dispatch]
    );
    const register = useCallback(
        (form: AuthForm) => dispatch(Register(form)),
        [dispatch]
    );
    const logout = useCallback(() => dispatch(Logout()), [dispatch]);
    return {
        user,
        login,
        register,
        logout,
    };
};
