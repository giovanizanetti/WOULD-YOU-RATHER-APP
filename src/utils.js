export const _isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1)
