import React, {useState} from "react";
import {User} from "./search-panel";
import {Table} from "antd";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

interface Project {
    key: number;
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface ListProps {
    list: Project[];
    users: User[];
    loading: boolean
}

export const List = ({list, ...props}: ListProps) => {

    return (
        <Table columns={[
            {
                title: '名称', key: 'name', dataIndex: 'name', sorter: (a: any, b: any) => {
                    return a.name.localeCompare(b)
                },
                render(value,project){
                    return <Link to={String(project.id)}>
                        {project.name}
                    </Link>
                }
            },
            {
                title: '负责人', render(project: any) {
                    return props.users.find((user) => user.id === project.personId)?.name || "未知"
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
        ]} {...props} pagination={false} dataSource={list} rowKey={record=> record.id}>

        </Table>
    );
};
