import React, { createContext } from 'react'

import { EventList } from '../types/types'

export type SliderContextType = {
  selected: number
  startDate: number
  endDate: number
  eventList: EventList[] | []
  changeSelected: (value: number) => void
  setEventList: React.Dispatch<React.SetStateAction<EventList[]>>
}

const SliderContext = createContext<SliderContextType | null>(null)

export { SliderContext }
