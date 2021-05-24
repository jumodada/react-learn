import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export interface State {
    projectModalOpen: boolean
}


const initialState: State = {
    projectModalOpen: false
}

export const projectListSlice = createSlice({
    name: 'projectLists',
    initialState,
    reducers: {
        openProjectModal(state){
            state.projectModalOpen = true
        },
        closeProjectModal(state){
            state.projectModalOpen =false
        }
    }
})

export const projectListActions = projectListSlice.actions

export const selectProjectModelOpen = (state:RootState)=> state.projectLists.projectModalOpen
