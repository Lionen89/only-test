import React, { useState, ReactNode } from 'react'
import { SliderContext } from '../../contexts'
import { EventList } from '../../types/types'

type SliderProviderProps = {
  children: ReactNode
}
const SliderProvider = ({ children }: SliderProviderProps) => {
  const [selected, setSelected] = useState<number>(0)
  const [countFrom, setCountFrom] = useState<number>(0)
  const [countTo, setCountTo] = useState<number>(0)
  const [eventList, setEventList] = useState<EventList[] | []>([])

  const changeSelected = (value: number) => {
    setSelected(value)
    setCountFrom(eventList.filter(({ id }) => id === value)[0]?.points.from)
    setCountTo(eventList.filter(({ id }) => id === value)[0]?.points.to)
  }

  const value = {
    selected,
    countTo,
    countFrom,
    eventList,
    changeSelected,
    setEventList,
  }

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
}

export default SliderProvider
