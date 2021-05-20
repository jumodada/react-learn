import { useState} from "react";

export const useAsync = (request?: any[]) => {
    const [state, setState] = useState({
        stat: 'idle',
        data: null as any,
        error: null
    })
    const setData = (data: any, name?: string) => {
        const newData = {
            data,
            stat: 'success',
            error: null
        }
        if(name){
           newData.data ={
               ...state.data,
               [name]: data
           }
        }
        setState(newData)
    }
    const setError = (error: any) => setState({
        ...state,
        stat: 'error',
        error
    })

    const run = (callback: any,name?: string, ...arg: any) => {
        const promise = callback(...arg)
        console.log(name)
        if (!promise || !promise.then) {
            throw new Error('不是promise')
        }
        setState({...state, stat: 'loading'})
        return promise.then((data: any) => {
            setData(data, name)
            return data
        }).catch((err: any) => {
            setError(err)
            return err
        })
    }

    return {
        isIdle: state.stat === 'idle',
        isLoading: state.stat === 'loading',
        isError: state.stat === 'error',
        isSuccess: state.stat === 'success',
        run,
        setData,
        ...state,
        request: (request || []).map(req=>{
            const {method,name} = req
            return {
                run: (...arg: any)=>run(method, name, ...arg)
            }
        }),
    }
}
