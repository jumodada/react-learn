import React from "react"
import {Drawer} from "antd"
import {useProjectModal} from "./utils";

export function ProjectModel() {
    const {projectModalOpen,close,open} = useProjectModal()
    return <Drawer onClose={close} visible={projectModalOpen} width={'500px'}>
        <h1>说尼玛呢</h1>
    </Drawer>
}
