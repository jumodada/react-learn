import React, {useState} from "react";
import {User} from "./search-panel";
import {Table} from "antd";

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
}

export const List = ({list, users}: ListProps) => {

    return (
        <Table columns={[
            {title: '名称', key:'name', dataIndex: 'name', sorter: (a: any,b: any)=>{
                    return a.name.localeCompare(b)
                }},
            {
                title: '负责人',render(project: any) {
                    console.log(users)
                    return users.find((user) => user.id === project.personId)?.name || "未知"
                }
            },
        ]} pagination={false} dataSource={list}>

        </Table>
    );
};
