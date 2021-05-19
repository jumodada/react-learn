import React from "react"
import {Rate} from "antd"

interface PinProps extends React.ComponentProps<typeof Rate> {
    checked: boolean
    onCheckedChange?: (checked: boolean) => void
}

export function Pin({checked, onCheckedChange, ...params}: PinProps) {
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
