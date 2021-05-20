import React from "react";
import {Table} from "antd";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import {Pin} from "../../components/pin";


export const List = ({list, mutate, ...props}: any) => {
    const changePin: any = (id: number) => (pin: boolean) => {
        mutate(id, pin)
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
            }
        ]} {...props} pagination={false} dataSource={list} rowKey={record => record.id}>

        </Table>
    );
};
