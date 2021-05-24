import React, {useRef, useState} from "react"
import {List, Popover, Typography, Divider} from "antd"
import {useProjects} from "../views/project-list/project";
import styled from "@emotion/styled";
import {ButtonNoPadding} from "./lib";
import {useDispatch} from "react-redux";
import {projectListActions} from "../views/project-list/project-list.slice";

export function ProjectPopover() {
    const {data} = useProjects()
    const dispatch = useDispatch()
    const openModel = () => dispatch(projectListActions.openProjectModal())
    function createProject() {
        (popover.current as any).setPopupVisible(false)
        openModel()
    }
    const popover = useRef()
    const content = <Wrapper>
        <Typography.Text type={'secondary'}>收藏项目</Typography.Text>
        <List>
            {
                (data ? data.lists : []).filter((d: any) => d.pin).map((item: any) => {
                    return <List.Item key={item.id}>
                        <List.Item.Meta title={item.name}>

                        </List.Item.Meta>
                    </List.Item>
                })
            }
        </List>
        <Divider/>
        <ButtonNoPadding onClick={createProject} type={'link'}>创建项目</ButtonNoPadding>
    </Wrapper>
    return <Popover ref={popover} placement={'bottom'} content={content}>
        <Title >
            项目
        </Title>
    </Popover>
}

const Title = styled.span`
  cursor: pointer;
  font-weight: bold;
`

const Wrapper = styled.div`
  min-width: 20rem;
`
