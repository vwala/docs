declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: any
        }
    }
}

declare module "*.svg" {
    const content: any
    export default content
}


declare module "*.png" {
    const
        content: any
    export default content
}