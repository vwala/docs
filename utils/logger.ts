import { LOG_LEVEL_KEY } from './constants'
import { isProduction } from './environment'
import { isLocalStorageSupported } from './localStorage'

let enabled = !isProduction()
let logLevel = 0

if (isLocalStorageSupported() && localStorage.getItem(LOG_LEVEL_KEY)) {

    try {

        let logLevel = parseInt(localStorage.getItem(LOG_LEVEL_KEY)) || 0

        if (logLevel == 1) {
            enabled = true
        }

    } catch (err) {
        console.error("Could not resolve log level")
    }
}

console.info(`Log. Enabled: ${enabled}. Level: ${logLevel}`)

export function log(...x) {
    if (enabled) {
        console.log(...x)
    }
}

export function info(...x) {
    if (enabled) {
        console.info(...x)
    }
}

export function warn(...x) {
    console.warn(...x)
}

export function error(...x) {
    console.error(...x)
}

export function dump(x) {
    console.log(JSON.stringify(x, null, 4))
}