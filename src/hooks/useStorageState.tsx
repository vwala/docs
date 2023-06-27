import type { Dispatch, SetStateAction } from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

function getValueFromStorage(storage: Storage, k: string) {

    if (typeof storage === "undefined") {
        return null
    }

    try {

        const v = storage.getItem(k) ?? "null"

        if (v == "undefined" || v == "null") {
            return null
        } else {
            return JSON.parse(v)
        }

    } catch (error) {
        console.error(error)
        return null
    }
}

function saveValueToStorage<S>(storage: Storage, k: string, v: S) {

    if (typeof storage === "undefined") {
        return null
    }

    return storage.setItem(k, JSON.stringify(v))
}

/**
 * @param key Key of the storage object
 * @param initialState Default initial value
 */
function initialize<S>(storage: Storage, key: string, initialState: S) {
    const valueLoadedFromStorage = getValueFromStorage(storage, key)
    if (valueLoadedFromStorage === null) {
        return initialState
    } else {
        return valueLoadedFromStorage
    }
}

type UseStorageStateReturnValue<S> = [
    S,
    Dispatch<SetStateAction<S>>,
    () => void
]

type BroadcastCustomEvent<S> = CustomEvent<{ newValue: S }>

function useStorageState<S>(
    storage: Storage,
    k: string,
    initialState?: S | (() => S)
): UseStorageStateReturnValue<S> {

    const [value, setValue] = useState(() => initialize(storage, k, initialState))
    const isUpdateFromCrossDocumentListener = useRef(false)
    const isUpdateFromWithinDocumentListener = useRef(false)
    const customEventTypeName = useMemo(() => {
        return `${k}-storage-update`
    }, [k])

    useEffect(() => {
        /**
         * We need to ensure there is no loop of
         * storage events fired. Hence we are using a ref
         * to keep track of whether setValue is from another
         * storage event
         */
        if (
            !isUpdateFromCrossDocumentListener.current ||
            !isUpdateFromWithinDocumentListener.current
        ) {
            saveValueToStorage<S>(storage, k, value)
        }
    }, [k, value])

    const listenToCrossDocumentStorageEvents = useCallback(
        (event: StorageEvent) => {
            if (event.storageArea === storage && event.key === k) {
                try {
                    isUpdateFromCrossDocumentListener.current = true
                    const newValue = JSON.parse(event.newValue ?? "null")
                    if (value !== newValue) {
                        setValue(newValue)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },
        [k, value]
    )

    // check for changes across windows
    useEffect(() => {
        // eslint-disable-next-line no-negated-condition
        if (typeof window !== "undefined") {
            window.addEventListener("storage", listenToCrossDocumentStorageEvents)

            return () => {
                window.removeEventListener(
                    "storage",
                    listenToCrossDocumentStorageEvents
                )
            }
        } else {
            console.warn("[useStorageState] window is undefined")

            return () => { }
        }
    }, [listenToCrossDocumentStorageEvents])

    const listenToCustomEventWithinDocument = useCallback(
        (event: BroadcastCustomEvent<S>) => {
            try {
                isUpdateFromWithinDocumentListener.current = true
                const { newValue } = event.detail
                if (value !== newValue) {
                    setValue(newValue)
                }
            } catch (error) {
                console.log(error)
            }
        },
        [value]
    )

    // check for changes within document
    useEffect(() => {
        // eslint-disable-next-line no-negated-condition
        if (typeof document !== "undefined") {
            document.addEventListener(
                customEventTypeName,
                listenToCustomEventWithinDocument
            )

            return () => {
                document.removeEventListener(
                    customEventTypeName,
                    listenToCustomEventWithinDocument
                )
            }
        } else {
            console.warn("[useStorageState] document is undefined")
            return () => { }
        }
    }, [customEventTypeName, listenToCustomEventWithinDocument])

    const broadcastValueWithinDocument = useCallback(
        (newValue: S) => {
            // eslint-disable-next-line no-negated-condition
            if (typeof document !== "undefined") {
                const event: BroadcastCustomEvent<S> = new CustomEvent(
                    customEventTypeName,
                    { detail: { newValue } }
                )
                document.dispatchEvent(event)
            } else {
                console.warn("[useStorageState] document is undefined")
            }
        },
        [customEventTypeName]
    )

    const set = useCallback(
        (newValue: S) => {
            isUpdateFromCrossDocumentListener.current = false
            isUpdateFromWithinDocumentListener.current = false
            setValue(newValue)
            broadcastValueWithinDocument(newValue)
        },
        [broadcastValueWithinDocument]
    )

    const remove = useCallback(() => {
        storage.removeItem(k)
    }, [k])

    return [value, set, remove]
}

export function useLocalStorageState<S>(k: string, initialState?: S | (() => S)) {
    if (typeof window !== 'undefined') {
        return useStorageState(localStorage, k, initialState)
    } else {
        return [initialState, (x) => x, () => null]
    }
}

export function useSessionStorageState<S>(k: string, initialState?: S | (() => S)) {
    if (typeof window !== 'undefined') {
        return useStorageState(sessionStorage, k, initialState)
    } else {
        return [initialState, (x) => x, () => null]
    }
}