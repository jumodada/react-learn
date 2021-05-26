import {useAsync} from "utils/use-async";
import {Project} from "views/project-list/list";
import {useHttp} from "utils/http";
import {useMutation, useQuery, useQueryClient} from "react-query";

export const useProjects = (param?: Partial<Project>): any => {
    const client = useHttp();
    return useQuery<any, any>('projects', () => client('projects', {data: param}));
};

export const useEditProject = (): any => {
    const client = useHttp();
    const queryClient = useQueryClient()
    return useMutation((params: any) => client(`projects/${params.id}`,{
        method: 'PATCH',
        data: params
    }),{
        onSuccess:()=> queryClient.invalidateQueries('projects')
    })
};

export const useAddProject = () => {
    const {run, ...asyncResult} = useAsync();
    const client = useHttp();
    const mutate = (params: Partial<Project>) => {
        return run(
            client(`projects/${params.id}`, {
                data: params,
                method: "POST",
            })
        );
    };
    return {
        mutate,
        ...asyncResult,
    };
};
