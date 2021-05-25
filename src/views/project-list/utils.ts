import {useMemo} from "react";

import {useUrlQueryParam} from "../../utils/url";

export function useProjectsSearchParams() {
    const [param, setParam] = useUrlQueryParam()
    return [
        useMemo(() => ({
            ...param,
            personId: Number(param.personId) || undefined
        }), [param]),
        setParam
    ] as const
}

export const useProjectModal = () => {
    const [{projectCreate}, setProjectCreate] = useUrlQueryParam()
    const open = () => setProjectCreate({projectCreate: true})
    const close = () => setProjectCreate({projectCreate: false})
    return {
        projectModalOpen: projectCreate === 'true',
        open,
        close
    }
}
