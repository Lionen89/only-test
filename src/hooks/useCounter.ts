import { useEffect, useState, useRef } from 'react'

export const useCounter = (value: number, defaultValue: number, eventCount: number): number => {
  const [counter, setCounter] = useState<number>(defaultValue)
  const duration: number = 20
  const delay = 3

  const versionRef = useRef<number>(0)

  useEffect(() => {
    if (!value || value === counter) return

    const step = Math.round(Math.abs((value - defaultValue) / eventCount / delay))
    versionRef.current += 1
    const currentVersion = versionRef.current

    const intervalId = setInterval(() => {
      if (currentVersion === versionRef.current) {
        setCounter((prev) => {
          const shouldIncrease = value > counter && prev + step <= value
          const shouldDecrease = value < counter && prev - step >= value

          if (shouldIncrease || shouldDecrease) {
            return shouldIncrease ? prev + step : prev - step
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
