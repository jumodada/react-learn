import React from "react"
import {SearchPanelTypes} from "../types/user"

export const SearchPanel = ({param, setParam, users}: SearchPanelTypes) => {
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={e => {
                setParam({...param, name: e.target.value})
            }}/>
            <select name="" id="" value={param.personId} onChange={e => {
                setParam({...param, personId: e.target.value})
            }}>
                <option key={0} value={''}>负责人</option>
                {
                    users.map(user => {
                        return <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    })
                }
            </select>
        </div>
    </form>
}
