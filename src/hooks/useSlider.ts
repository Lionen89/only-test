import { useContext } from 'react'
import { SliderContext } from '../contexts'
import { EventList } from '../types/types'

interface UseSliderReturnType {
  selected: number
  lastSelected: number
  startDate: number
  endDate: number
  eventList: EventList[]
  changeSelected: (index: number) => void
  setEventList: React.Dispatch<React.SetStateAction<EventList[]>>
}

const useSlider = (): UseSliderReturnType => {
  const currentSliderContext = useContext(SliderContext)
  if (!currentSliderContext) {
    throw new Error('useCurrentUser has to be used within <CurrentUserContext.Provider>')
  }

  return currentSliderContext
}

export { useSlider }
