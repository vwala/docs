// import * as copy from 'copy-to-clipboard';
// import * as numeral from 'numeral';
// import { USER_LOC_KEY } from './constants';
// import { isLocalStorageSupported } from './localStorage';
// import { error, warn } from './logger';

// export function copyToClipboard(value, label = "Copied. Paste using Ctrl v") {
//     copy(value)
//     EventManager.Instance.emitNotification(label)
// }

// export function notify(msg: string | React.ReactNode) {
//     EventManager.Instance.emitNotification(msg)
// }

// export function prettyNumber(x: number) {
//     return numeral(x || 0).format('0,0')
// }

// export function pcToString(pc: number): string {
//     return !!pc ? round(pc * 100, 2).toString() : "0"
// }

// export function getTablePageSize(offset = 300, defaultRowHeight = 42, defaultPageSize = 15) {
//     let size = (window.innerHeight && Math.min(Math.round((window.innerHeight - offset) / defaultRowHeight), 25)) || defaultPageSize
//     if (size <= 0) {
//         warn("Table page size was <= 0!", window.innerHeight, window.innerWidth)
//         size = defaultPageSize
//     }
//     return size
// }

// /**
//  * Merges two arrays together, ensuring duplicates are ignored 
//  * @param a 
//  * @param b 
//  */
// export function mergePageResults(a: { id: string }[], b: { id: string }[]) {

//     // Test for duplicates
//     let c = [...a]

//     for (let bx of b) {
//         if (a.findIndex(x => x.id == bx.id) == -1) {
//             c.push(bx)
//         } else {
//             warn("Page merge ignored duplicate")
//         }
//     }

//     return c
// }

// /**
//  * Resolve a view prop parameter. Rules:
//  * 
//  * - Check router props
//  * - Check user props
//  * - Return undefined
//  * 
//  * @param props 
//  * @param k 
//  */
// export function resolveViewProp(props, k: "sId" | "aId") {
//     if (props[k]) {
//         return props[k]
//     } else if (props.params && props.params[k]) {
//         return props.params[k]
//     } else {
//         if (k == "sId" && props.user.Type === UserAccountType.Store) {
//             return props.user.SelectedStore.sId
//         } else if (k == "aId" && props.user.Type === UserAccountType.Affiliate) {
//             return props.user.SelectedStore.aId
//         }
//     }
//     return undefined
// }

// export function resolveUserLocation() {

//     try {
//         let cached = isLocalStorageSupported() && localStorage.getItem(USER_LOC_KEY)
//         if (cached) {
//             let loc: { country: string } = JSON.parse(cached) || null
//             if (loc && loc.country) {
//                 // loc.country = "IN"
//                 let hash = ""
//                 for (let i = 0; i < loc.country.length; i++) {
//                     hash += pad(loc.country.charCodeAt(i), 3)
//                 }
//                 return { code: hash }
//             }
//         }
//     } catch (err) {
//         error(err)
//     }

//     return null
// }

// export function pad(n, width: number, z?: string) {
//     z = z || '0';
//     n = n + '';
//     return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
// }

export function round(value: number, places: number = 2) {
    return +(Math.round(`${value}e+${places}` as any) + `e-${places}`) as any
}

// export function isWithinIFrame() {
//     try {
//         return window.self !== window.top
//     } catch (e) {
//         return true
//     }
// }

// export function isFacebookApp() {
//     try {
//         var ua = navigator.userAgent || navigator.vendor || (window as any).opera
//         return !!ua && (ua.toUpperCase().indexOf("FBAN") > -1 || ua.toUpperCase().indexOf("FBAV") > -1)
//     } catch (e) {
//         return false
//     }
// }

// export function getUserAgent() {
//     try {
//         let referrer = document.referrer;
//         var ua = navigator.userAgent || navigator.vendor || (window as any).opera
//         return {
//             referrer,
//             ua,
//             fb: isFacebookApp()
//         }
//     } catch (e) {
//         return {}
//     }
// }

// // let x = inIframe()
// // warn("inside iframe?", x)


// export function fill(x: string, ...args) {

//     // return React.useMemo(() => {

//     args.forEach((v, i) => {
//         let re = new RegExp(`\\{${i}\\}`, "g")
//         x = x.replace(re, v)
//     })

//     let aTerm = StoreManager.Instance.userStore.Term

//     if (aTerm) {
//         x = x.replace(/XX/g, AffiliateTerm[aTerm])
//     }

//     return x

//     // }, [x, ...args])
// }


// // @see https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
// export function scrollToElement(e: Element) {
//     e.scrollIntoView({ block: 'center' })
// }