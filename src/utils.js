export const _isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object

export const _capitalize = (string) => string[0].toUpperCase() + string.slice(1)

export const _truncate = (str, n) => str.length > n && '...' + str.substring(0, n - 1) + '...'
