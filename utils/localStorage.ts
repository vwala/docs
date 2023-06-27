import { error, warn } from './logger'

export function isLocalStorageSupported() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null
    } catch (e) {
        warn("LocalStorage not supported", e)
        return false
    }
}

export function getLocalStorageValue<T>(k: string): T | null {

    try {
        let v = isLocalStorageSupported() && localStorage.getItem(k)
        if (!!v && v != "undefined" && v != "null") {
            return (v as any) as T
        }
    } catch (err) {
        error(`LocalStorage: Could not read ${k} from LocalStorage`, err)
    }

    return null
}

export function setLocalStorageValue<T>(k: string, v) {

    try {
        if (isLocalStorageSupported()) {
            localStorage.setItem(k, v)
        }
    } catch (err) {
        error(`LocalStorage: Could not set ${k} to ${v}`, err)
    }

    return null
}
