import { camelCaseToWords } from './string'

/**
 * Returns a sort function that can be used to sort a specific field
 * in a specific direction. 
 * 
 * @param a 
 * @param b 
 */
export function sortFn(sortKey: string, dir: "asc" | "desc" = "asc") {

    return function (a, b) {

        let a1 = a[sortKey]
        let b1 = b[sortKey]

        if (typeof a !== typeof b) {
            throw new Error("Type mismatch")
        }

        if (a1 instanceof Date) {
            a1 = a1.valueOf()
        }

        if (b1 instanceof Date) {
            b1 = b1.valueOf()
        }

        if (a1 > b1) {
            return dir == "asc" ? 1 : -1
        }

        if (a1 < b1) {
            return dir == "asc" ? -1 : 1
        }

        // a must be equal to b
        return 0
    }
}


export function getHostNameFromUrl(domain: string) {

    return (domain || "").toLowerCase()
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .replace(/\.(myshopify|com|net|org)(\.\w+)*/i, "")
}


export function toRefId(id: string) {
    return id ? id.substring(0, id.indexOf("-")).toUpperCase() : ""
}

export function enumToList(domain, keys?: (number | string)[]) {

    let res: { k: string | number, v: string }[] = Object.keys(domain)
        .map(k => parseInt(k))
        .filter(k => !isNaN(k))
        .filter(k => keys == undefined || keys.indexOf(k) > -1)
        .map(k => {
            return {
                k: k,
                v: camelCaseToWords(domain[k])
            }
        })

    return res
}
