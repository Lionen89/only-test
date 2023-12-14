import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.scss'

type titleProps = {
  value: number
  defaultValue: number
}

const Counter: React.FC<titleProps> = ({ value, defaultValue }) => {
  const count = useCounter(value, defaultValue)

  return <p className="counter__text">{count}</p>
}
export default Counter
