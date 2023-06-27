export function getEnvironment() {
    return process.env.NODE_ENV
}

export function getVersion() {
    return process.env.APP_VERSION
}

export function isUnit() {
    return getEnvironment() == "unit"
}

export function isLocal() {
    return getEnvironment() == "local" || getEnvironment() == "locals"
}

export function isDevelopment() {
    return getEnvironment() == "development"
}

export function isProduction() {
    return getEnvironment() == "production"
}