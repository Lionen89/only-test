import { useEffect, useState, useRef } from 'react'

export const useCounter = (value: number, defaultValue: number, eventCount: number): number => {
  const [counter, setCounter] = useState<number>(defaultValue)
  const duration: number = 20
  const delay: number = 5

  const versionRef = useRef<number>(0)

  useEffect(() => {
    if (!value || value === counter) return

    const step = Math.ceil(Math.abs((value - defaultValue) / eventCount / delay))
    versionRef.current += 1
    const currentVersion = versionRef.current

    const intervalId = setInterval(() => {
      if (currentVersion === versionRef.current) {
        setCounter((prev) => {
          if (value > counter && prev + step <= value) {
            return prev + step
          } else if (value < counter && prev - step >= value) {
            return prev - step
          } else {
            return value
          }
        })
      }
    }, duration)

    return () => {
      clearInterval(intervalId)
    }
  }, [counter, value, defaultValue, eventCount])

  return counter
}
