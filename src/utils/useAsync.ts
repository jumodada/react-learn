import {useCallback, useState} from "react";
import {useMountRef} from "./index";

export const useAsync = (request?: any[]) => {
    const [state, setState] = useState({
        stat: 'idle',
        data: null as any,
        error: null
    })
    const mountRef = useMountRef()
    const setData = (data: any, name?: string) => {
        const newData = {
            data,
            stat: 'success',
            error: null
        }
        if (name) {
            newData.data = {
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

    const run = useCallback((callback: any, name?: string, ...arg: any) => {
        const promise = callback(...arg)
        if (!promise || !promise.then) {
            throw new Error('不是promise')
        }
        setState((preState: any) => {
            console.log(preState)
            return {...preState, stat: 'loading'}
        })
        return promise.then((data: any) => {
            if (mountRef.current) setData(data, name)
            return data
        }).catch((err: any) => {
            setError(err)
            return err
        })
    }, [state, setData, setError])
    return {
        isIdle: state.stat === 'idle',
        isLoading: state.stat === 'loading',
        isError: state.stat === 'error',
        isSuccess: state.stat === 'success',
        run,
        setData,
        ...state,
        request: (request || []).map(req => {
            const {method, name} = req
            return {
                run: (...arg: any) => run(method, name, ...arg)
            }
        }),
    }
}
