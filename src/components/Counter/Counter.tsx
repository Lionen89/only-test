import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.scss'

type titleProps = {
  value: number
  defaultValue: number
  eventCount: number
}

const Counter: React.FC<titleProps> = ({ value, defaultValue, eventCount }) => {
  const count = useCounter(value, defaultValue, eventCount)

  return <p className="counter__text">{count}</p>
}
export default Counter
