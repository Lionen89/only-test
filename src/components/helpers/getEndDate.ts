import { EventList } from '../../types/types'

export const getEndDate = (list: EventList[]) => {
  return list[0]?.events.slice().sort((a, b) => b.year - a.year)[0].year
}
