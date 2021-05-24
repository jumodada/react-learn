import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";
import {LoginOrRegister, logout} from "../auth-provider";
import {bootstrapUser} from "../context/auth-context";

export const initialState: any = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

const {setUser} = authSlice.actions

export const getUser = (state: RootState) => state.auth.user

export const Login = (form: any) => (dispatch: AppDispatch) => LoginOrRegister(form).then((user: any) => dispatch(setUser(user)))
export const Register = (form: any) => (dispatch: AppDispatch) => LoginOrRegister(form, 'register').then((user: any) => dispatch(setUser(user)))
export const Logout = () => (dispatch: AppDispatch) => logout().then(() => dispatch(setUser(null)))
export const bootstrap = () => (dispatch: AppDispatch) => bootstrapUser().then((user) => dispatch(setUser(user)))


