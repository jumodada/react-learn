import React from "react"
import {Select} from "antd"

function toNumber(value: any) {
    value = Number(value)
    return (isNaN(value) ? 0 : value) || undefined
}

export function IdSelect({value, onChange, defaultOptions, options, ...params}: any) {
    return <Select {...params} value={options.length ? toNumber(value) : ''} onChange={value => onChange(toNumber(value))}>
        {defaultOptions ? <Select.Option value={0}>
            {defaultOptions}
        </Select.Option> : null}

        {
            options.map((option: any)=>
                <Select.Option value={option.id} key={option.id}>
                    {option.name}
                </Select.Option>
            )
        }
    </Select>
}
