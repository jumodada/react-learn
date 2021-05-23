import { useCallback, useReducer } from "react";
type State<T> = {
    pre: T[];
    present: T;
    next: T[];
};


const undoReducer = <T>(state: State<T>, action: any) => {
    const { pre, present, next } = state;
    const { newPresent } = action;

    switch (action.type) {
        case 'UNDO': {
            if (pre.length === 0) return state;

            const previous = pre[pre.length - 1];
            const newPast = pre.slice(0, pre.length - 1);

            return {
                pre: newPast,
                present: previous,
                next: [present, ...next],
            };
        }

        case 'REDO': {
            if (next.length === 0) return state;

            const nextVal = next[0];
            const newFuture = next.slice(1);

            return {
                pre: [...pre, present],
                present: nextVal,
                next: newFuture,
            };
        }

        case 'SET': {
            if (newPresent === present) {
                return state;
            }
            return {
                pre: [...pre, present],
                present: newPresent,
                next: [],
            };
        }

        case 'RESET': {
            return {
                pre: [],
                present: newPresent,
                next: [],
            };
        }
    }
    return state;
};

export const useUndo = <T>(initialPresent: T) => {
    const [state, dispatch] = useReducer(undoReducer, {
        pre: [],
        present: initialPresent,
        next: [],
    } as State<T>);

    const canUndo = state.pre.length !== 0;
    const canRedo = state.next.length !== 0;

    const undo = useCallback(() => dispatch({ type: "UNDO" }), []);

    const redo = useCallback(() => dispatch({ type: "REDO" }), []);

    const set = useCallback(
        (newPresent: T) => dispatch({ type: "SET", newPresent }),
        []
    );

    const reset = useCallback(
        (newPresent: T) => dispatch({ type: "RESET", newPresent }),
        []
    );

    return [state, { set, reset, undo, redo, canUndo, canRedo }] as const;
};


