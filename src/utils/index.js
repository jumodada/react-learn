export const cleanObject = (obj) => {
    const res = {...obj}
    Object.keys(res).forEach(key => {
        if (!obj[key] && typeof obj[key] !== 'number') delete res[key]
    })
    return res
}
