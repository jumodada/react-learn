import {request} from "./fetch";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({user}: { user: any }) => {
    window.localStorage.setItem(localStorageKey, user.token || "");
    return user;
};


export const LoginOrRegister = (data: { username: string; password: string }, url = 'login') => {
    return request(url, {data,method: 'POST'}).then(async (res) => {
        return handleUserResponse(res)
    }).catch(err=>{})
};

export const logout = async () =>
    window.localStorage.removeItem(localStorageKey);
