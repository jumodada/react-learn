import React from "react"

export const List = ({lists, users}) => {
    return <table>
        <thead>
        <tr>
            <th>名称</th>
            <th>负责人</th>
        </tr>
        </thead>
        <tbody>
        {
            lists.map(list => <tr key={list.id}>
                <td>{list.name}</td>
                <td>
                    {users.find(user => user.id === list.personId)?.name}
                </td>
            </tr>)
        }
        </tbody>
    </table>
}
