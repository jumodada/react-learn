import {useCallback, useReducer} from "react";
import {useMountRef} from "./index";


function useSafeDispatch(dispatch: (...arg: any) => void) {
    const mountedRef = useMountRef()
    return useCallback((...args: any) => (mountedRef.current ? dispatch(...args) : void 0), [dispatch, mountedRef])
}

export const useAsync = (request?: any[]) => {
    const [state, dispatch] = useReducer((state: any, action: any) => ({
        ...state,
        ...action
    }), {
        stat: 'idle',
        data: null,
        error: null
    })
    const safeDispatch = useSafeDispatch(dispatch)
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
        safeDispatch(newData)
    }
    const setError = (error: any) => safeDispatch({stat: 'error'})

    const run = useCallback((callback: any, name?: string, ...arg: any) => {
        const promise = callback(...arg)
        if (!promise || !promise.then) {
            throw new Error('不是promise')
        }
        safeDispatch({stat: 'loading'})
        return promise.then((data: any) => {
            if (mountRef.current) setData(data, name)
            return data
        }).catch((err: any) => {
            setError(err)
            return err
        })
    }, [state, setData, setError])
    console.log(state)
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
