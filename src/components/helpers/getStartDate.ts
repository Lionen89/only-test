import { EventList } from '../../types/types'

export const getStartDate = (list: EventList): number => {
  return list?.events.slice().sort((a, b) => a.year - b.year)[0].year
}
