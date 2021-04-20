import {useEffect, useState} from "react";

export const cleanObject = (obj: any) => {
    const res = {...obj}
    Object.keys(res).forEach(key => {
        if (!obj[key] && typeof obj[key] !== 'number') delete res[key]
    })
    return res
}

export function useDeBounce(value: unknown){
   const [debounceState,setDebounceState] = useState(value)
    useEffect(()=>{
       const timeout = setTimeout(()=>setDebounceState(value),200)
       return ()=> clearTimeout(timeout)
    },[value])
    return  debounceState
}

export function useMount(callback: (...arg: any)=> any){
    useEffect(()=>{
        callback()
    },[])
}
