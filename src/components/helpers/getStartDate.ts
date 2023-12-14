import { EventList } from '../../types/types'

export const getStartDate = (list: EventList[]) => {
  return list[0]?.events.slice().sort((a, b) => a.year - b.year)[0].year
}
