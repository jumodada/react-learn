import React from "react"
import {Drawer} from "antd"
import {useDispatch, useSelector} from "react-redux";
import {projectListActions, selectProjectModelOpen} from "./project-list.slice";

export function ProjectModel() {
    const dispatch = useDispatch()
    const visible = useSelector(selectProjectModelOpen)
    return <Drawer onClose={()=> dispatch(projectListActions.closeProjectModal())} visible={visible} width={'500px'}>
        <h1>说尼玛呢</h1>
    </Drawer>
}
