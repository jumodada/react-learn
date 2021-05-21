import React from "react"
import {Rate} from "antd"



export function Pin({checked, onCheckedChange, ...params}: any) {
    return <Rate
        count={1}
        onChange={num => {
            onCheckedChange && onCheckedChange(!!num)
        }
        }
        value={Number(checked)}
        {...params}
    />

}
