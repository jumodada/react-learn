import React from "react";
import { Dropdown, Menu, Table} from "antd";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import {Pin} from "../../components/pin";
import {ButtonNoPadding} from "../../components/lib";


export const List = ({list, mutate, retry, openModel,...props}: any) => {
    const changePin: any = (project: any) => (pin: boolean) => {
        mutate(project, pin).then(retry)
    }

    return (
        <Table columns={[
            {
                title: '收藏',
                render(value, project) {
                    return <Pin checked={project.pin} onCheckedChange={changePin(project)}/>
                }
            },
            {
                title: '名称', key: 'name', dataIndex: 'name', sorter: (a: any, b: any) => {
                    return a.name.localeCompare(b)
                },
                render(value, project) {
                    return <Link to={String(project.id)}>
                        {project.name}
                    </Link>
                }
            },
            {
                title: '负责人', render(project: any) {
                    return props.users.find((user: any) => user.id === project.personId)?.name || "未知"
                }
            },
            {
                title: '创建时间',
                render(value, project: any) {
                    return <span>
                        {(project && project.created) ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
                    </span>
                }
            },
            {
                render(){
                    return <Dropdown overlay={
                        <Menu>
                            <Menu.Item key={'edit'}>
                                <ButtonNoPadding onClick={openModel} type={'link'}>编辑</ButtonNoPadding>
                            </Menu.Item>
                        </Menu>
                    }>
                        <ButtonNoPadding type={'link'}>...</ButtonNoPadding>
                    </Dropdown>
                }
            }
        ]} {...props} pagination={false} dataSource={list ? list.lists : []} rowKey={record => record.id}>

        </Table>
    );
};
