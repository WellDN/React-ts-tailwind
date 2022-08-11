import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) { //this component make whenever the actual value change it will refresh each time the value has a change, so whenever you increment something it gonna refresh with the actual data inside of it.
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue] //everytime this change when key or value changes
}