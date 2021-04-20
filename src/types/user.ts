export interface SearchParams {
    name: string
    personId: string
}

export interface SearchPanelTypes {
    param: SearchParams
    users: UserList[]
    setParam: (initState: any)=> any
}

export interface ProjectLists {
    id: number
    name: string
    personId: number
    organization: string
    created: number
}

export interface UserList {
    id: number
    name: string
}

export interface Lists {
    users: UserList[]
    lists: ProjectLists[]
}
