import { error } from './logger';

export const cyan = '#00DDDD' // #00bfc8
export const cyan2 = '#1EBDB2' // #00bfc8
export const orange = '#f96a59' // '#FA8072' // '#fd9674'
export const lightGreen = '#00fa9a'
export const purple = '#9672d0'
export const pink = '#FF69B4'
export const paidColour = cyan
export const unpaidColour = orange
export const darkBackground = "#202124"  // "#222"
export const darkBackground2 = "#303134" // "#666"

export const gradientDefault = "linear-gradient(to bottom, #000428, #004e92)"
export const gradientDefaultRhs = "linear-gradient(to bottom, #360033, #004e92, #0b8793)"
export const gradientRed = "linear-gradient(to right, #41295a, #2f0743)"
export const gradientRedRhs = "linear-gradient(to bottom, #2f0743, #41295a, #2f0743)"

export function isLight(hexColour: string) {
    const hex = hexColour.replace('#', '')
    const c_r = parseInt(hex.substr(0, 2), 16)
    const c_g = parseInt(hex.substr(2, 2), 16)
    const c_b = parseInt(hex.substr(4, 2), 16)
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000
    return brightness > 155
}

export function isBlack(hexColour: string) {
    return hexColour == "#000" || hexColour == "#000000" || hexColour == "black" || hexColour == "#231f20"
}

export function shadeColor(color: string, percent: number = 0) {

    try {

        if (color.length != 7) {
            error("Expected hex value")
            return color
        }

        let R = parseInt(color.substring(1, 3), 16)
        let G = parseInt(color.substring(3, 5), 16)
        let B = parseInt(color.substring(5, 7), 16)

        R = parseInt((R * (100 + percent) / 100).toString())
        G = parseInt((G * (100 + percent) / 100).toString())
        B = parseInt((B * (100 + percent) / 100).toString())

        R = (R < 255) ? R : 255
        G = (G < 255) ? G : 255
        B = (B < 255) ? B : 255

        let RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16))
        let GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16))
        let BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16))

        return "#" + RR + GG + BB

    } catch (err) {
        error(err)
        return color
    }
}

export function classifyColour(color: string) {

    try {

        if (color.length != 7) {
            error("Expected hex value")
            return "neutral"
        }

        let R = parseInt(color.substring(1, 3), 16)
        let G = parseInt(color.substring(3, 5), 16)
        let B = parseInt(color.substring(5, 7), 16)

        R = (R < 255) ? R : 255
        G = (G < 255) ? G : 255
        B = (B < 255) ? B : 255

        let threshold = 1.05

        // console.log({ R, G, B })

        if (R > 100 && R > G * threshold && R > B * threshold) {
            return "red"
        } else if (G > 100 && G > R * threshold && G > B * threshold) {
            return "green"
        } else if (B > 100 && B > G * threshold && B > R * threshold) {
            return "blue"
        } else {
            return "neutral"
        }

    } catch (err) {
        error(err)
        return "neutral"
    }
}