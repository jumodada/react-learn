import {useState} from "react";

const defaultState = {
    stat: 'idle',
    data: null,
    error: null
}

export const useAsync = (initialState?: any) => {
    const [state,setState] = useState({
        ...defaultState,
        ...initialState
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
    const run = (promise: any)=>{
        if(!promise || !promise.then) {
            throw new Error('不是promise')
        }
        setState({...state, stat: 'loading'})
        return promise.then((data: any)=>{
            setData(data)
            return data
        }).catch((err: any)=>{
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
        ...state
    }
}
