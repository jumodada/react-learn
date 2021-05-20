import {useRef, useState} from "react";

const defaultState = {
    stat: 'idle',
    data: null,
    error: null
}

export const useAsync = () => {
    const [state, setState] = useState({
        ...defaultState,
    })
    const setData = (data: any) => setState({
        data,
        stat: 'success',
        error: null
    })
    const setError = (error: any) => setState({
        ...state,
        stat: 'error',
        error
    })

    const preCallback = useRef(()=>{})
    const run = (callback: any) => {
        const promise = callback()
        console.log(promise)
        if (!promise || !promise.then) {
            throw new Error('不是promise')
        }
        preCallback.current = callback
        setState({...state, stat: 'loading'})
        return promise.then((data: any) => {
            setData(data)
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
        retry: ()=>run(preCallback.current)
    }
}
