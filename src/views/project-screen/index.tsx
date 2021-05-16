import React from "react"
import {Link, Routes,Navigate} from "react-router-dom"
import {Route} from "react-router";
import {Kanban} from '../kanban'
import {Epic} from "../epic"
export function ProjectScreen() {
    return <div>
        <h1>ProjectScreen</h1>
        <Link to={'kanban'}>看板</Link>
        <Link to={'epic'}>任务组</Link>
        <Routes>
            <Route path={'kanban'} element={<Kanban />}>看板</Route>
            <Route path={'epic'} element={<Epic />}>任务组</Route>
            <Navigate to={window.location.pathname + '/kanban'} />
        </Routes>
    </div>
}
