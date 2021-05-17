import {useSearchParams} from "react-router-dom";
import {useMemo} from "react";
import {cleanObject} from "./index";

export function useUrlQueryParam(): any {
    const [searchParams, setSearchParams] = useSearchParams()
    return [useMemo(
        () => Object.fromEntries(searchParams), [searchParams]
    ),
        (params: Partial<any>)=>{
            const c = cleanObject({...Object.fromEntries(searchParams),...params}) as any
            return setSearchParams(c)
        }
    ]
}
