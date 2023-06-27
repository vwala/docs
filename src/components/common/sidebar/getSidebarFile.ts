export const getSidebarFile = (sidebar: string) => {
    try {
        // declare as var here, so it's accessible outside of the try scope
        var [sidebarfile] = require(`../../../data/sidebars/${sidebar}.yaml`)
    } catch (e) {
        // TODO: make clear error handling here
        throw e
    }

    return sidebarfile
}