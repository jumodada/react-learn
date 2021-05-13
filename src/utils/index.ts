import {useEffect, useState} from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: any) => {
    const result = {...object};
    Object.keys(result).forEach((key) => {
        const value = result[key as never];
        if (isFalsy(value)) {
            delete result[key as never];
        }
    });
    return result;
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};


export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray);
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (index: number) => {
            const copy = [...value];
            copy.splice(index, 1);
            setValue(copy);
        },
    };
};

export function useDocumentTitle(title: string, keepOnUnmount = true) {
    const preTitle = document.title
    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(() => {
        return () => {
            if(keepOnUnmount) return
            document.title = preTitle
        }
    }, [])
}
