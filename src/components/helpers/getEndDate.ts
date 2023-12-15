import { EventList } from '../../types/types'

export const getEndDate = (list: EventList):number => {
  return list?.events.slice().sort((a, b) => b.year - a.year)[0].year
}
