import {useCallback, useState} from "react";


const UNDO = 'UNDO'
const REDO = 'REDO'

export function useUndo<T>(initialPresent: T) {
    const [state, setState] = useState({
        pre: [],
        current: initialPresent,
        next: []
    })
    const canUndo = state.pre.length !== 0

    const canRedo = state.next.length !== 0

    const undo = useCallback(() => {
            setState((currentState: any) => {
                const {past, present, future} = currentState
                if (past.length === 0) return currentState
                const previous = past[past.length - 1]
                const curPast = past.slice(0, past.length - 1)
                return {
                    pre: curPast,
                    current: previous,
                    next: [present, ...future]
                }

            })
        }, []
    )

    const redo = useCallback(() => {
        setState((currentState: any) => {
            if (!canRedo) return
            const {past, present, future} = currentState
            if (future.length === 0) return currentState
            const next = future[0]
            const newFuture = future.slice(1)
            return {
                pre: [...past, present],
                current: next,
                next: newFuture
            }
        })
    }, [])

    const set = useCallback((newPresent: any)=>{
        setState((currentState: any) => {
            const {past, present, future} = currentState
            if (newPresent === present) return currentState
            return {
                pre: [...past, present],
                current: newPresent,
                next: []
            }
        })
    },[])

   const reset = useCallback((newPresent: any)=>{
       setState(() => {
           return {
               pre: [],
               current: newPresent,
               next: []
           }
       })
   },[])

    return [
        state,
        {set, reset, undo, redo, canUndo, canRedo}
    ]
}
