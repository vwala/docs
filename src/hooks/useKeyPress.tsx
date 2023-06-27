import { useEffect, useState } from "react"

export function useKeyPress(k: string, callback: (k: string) => void) {

    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState<boolean>(false)

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === k) {
            setKeyPressed(true)
        }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
        if (key === k) {
            setKeyPressed(false)
            callback(k)
        }
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler)
        window.addEventListener("keyup", upHandler)
        return () => {
            window.removeEventListener("keydown", downHandler)
            window.removeEventListener("keyup", upHandler)
        }
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return keyPressed
}