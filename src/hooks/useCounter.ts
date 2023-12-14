import { useEffect, useState } from 'react'

export const useCounter = (value: number, defaultValue: number): number => {
  const [counter, setCounter] = useState<number>(defaultValue)
  const duration: number = 20

  useEffect(() => {
    if (!value || value === counter) return

    const timerId = setTimeout(() => {
      if (value > counter) {
        setCounter((prev) => prev + 1)
      } else {
        setCounter((prev) => prev - 1)
      }
    }, duration)

    return () => {
      clearTimeout(timerId)
    }
  }, [counter, value])

  return counter
}
