import React, { useState, ReactNode } from 'react'
import { SliderContext } from '../../contexts'
import { EventList } from '../../types/types'
import { getStartDate } from '../../components/helpers/getStartDate'
import { getEndDate } from '../../components/helpers/getEndDate'

type SliderProviderProps = {
  children: ReactNode
}
const SliderProvider = ({ children }: SliderProviderProps) => {
  const [selected, setSelected] = useState<number>(0)
  const [startDate, setStartDate] = useState<number>(0)
  const [endDate, setEndDate] = useState<number>(0)
  const [eventList, setEventList] = useState<EventList[] | []>([])

  const changeSelected = (value: number) => {
    setSelected(value)
    setStartDate(getStartDate(eventList.filter(({ id }) => id === value)))
    setEndDate(getEndDate(eventList.filter(({ id }) => id === value)))
  }

  const value = {
    selected,
    startDate,
    endDate,
    eventList,
    changeSelected,
    setEventList,
  }

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
}

export default SliderProvider
