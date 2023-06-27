export function indexArray<T>(indexField: string, source: T[]): { [id: string]: T } {
    return source.reduce((prev, cur) => { prev[cur[indexField]] = cur; return prev }, {})
}

/**
 * Randomly pick an element from the array
 * 
 * @param source 
 */
export function pick<T>(source: T[]): { item: T, index: number } {
    let index = Math.floor(Math.random() * source.length)
    return { item: source[index], index }
}

export function sum(arr: number[]) {
    return arr.length > 0
        ? arr.reduce((cur, next) => cur + next || 0, 0)
        : 0
}