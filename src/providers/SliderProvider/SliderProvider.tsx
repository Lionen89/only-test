import React, { useState, ReactNode } from 'react'
import { SliderContext } from '../../contexts'
import { EventList } from '../../types/types'
import { getStartDate } from '../../components/helpers/getStartDate'
import { getEndDate } from '../../components/helpers/getEndDate'

interface SliderProviderProps {
  children: ReactNode
}
interface SliderContextValue {
  selected: number
  lastSelected: number
  startDate: number
  endDate: number
  eventList: EventList[] | []
  changeSelected: (value: number) => void
  setEventList: React.Dispatch<React.SetStateAction<EventList[] | []>>
}

const SliderProvider = ({ children }: SliderProviderProps) => {
  const [selected, setSelected] = useState<number>(0)
  const [lastSelected, setLastSelected] = useState<number>(0)
  const [startDate, setStartDate] = useState<number>(0)
  const [endDate, setEndDate] = useState<number>(0)
  const [eventList, setEventList] = useState<EventList[] | []>([])

  const changeSelected = (value: number) => {
    setLastSelected(selected)
    setSelected(value)
    setStartDate(getStartDate(eventList.filter(({ id }) => id === value)[0]))
    setEndDate(getEndDate(eventList.filter(({ id }) => id === value)[0]))
  }

  const value: SliderContextValue = {
    selected,
    lastSelected,
    startDate,
    endDate,
    eventList,
    changeSelected,
    setEventList,
  }

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
}

export default SliderProvider
