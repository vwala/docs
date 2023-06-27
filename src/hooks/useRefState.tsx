import * as React from "react"

/**
 * @see https://ryankubik.com/blog/use-ref-state
 */
export function useRefState<T>(initialValue?: T | (() => T)) {
    const [state, setState] = React.useState<T>(initialValue)
    const stateRef = React.useRef<T>(state)
    React.useEffect(
        () => {
            stateRef.current = state
        },
        [state],
    )
    return [state, stateRef, setState] as [T, React.MutableRefObject<T>, React.Dispatch<React.SetStateAction<T>>]
}
