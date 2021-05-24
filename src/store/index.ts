import {configureStore} from "@reduxjs/toolkit";
import {projectListSlice} from "../views/project-list/project-list.slice";
import {authSlice} from "./auth.slice";

export const rootReducer = {
   projectLists: projectListSlice.reducer,
   auth: authSlice.reducer
}

export const store = configureStore({
   reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
