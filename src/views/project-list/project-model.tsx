import React from "react"
import {Drawer} from "antd"

export function ProjectModel({visible, toClose}: any) {
    return <Drawer onClose={toClose} visible={visible} width={'500px'}>
        <h1>说尼玛呢</h1>
    </Drawer>
}
