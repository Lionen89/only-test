import React from 'react'

import CurclePagination from '../CurclePagination/CurclePagination'
import './menu.scss'
import { useSlider } from '../../hooks/useSlider'
import Counter from '../Counter/Counter'
import { getEndDate } from '../helpers/getEndDate'
import { getStartDate } from '../helpers/getStartDate'

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { changeSelected, selected, lastSelected, eventList, startDate, endDate } = useSlider()
  const [activeType, setActiveType] = React.useState<string | undefined>(undefined)

  const handleClick = (index: number) => () => {
    changeSelected(index)
  }

  React.useEffect(() => {
    if (eventList[selected]?.type !== undefined) {
      setActiveType(eventList[selected].type)
    }
  }, [eventList, selected])

  return (
    <div className="menu">
      <Counter
        defaultValue={getStartDate(eventList[lastSelected])}
        value={startDate}
        eventCount={eventList[selected].events.length}
      />
      <Counter
        defaultValue={getEndDate(eventList[lastSelected])}
        value={endDate}
        eventCount={eventList[selected].events.length}
      />
      <CurclePagination onClick={handleClick} points={eventList} />
      <p className="menu__activeType">{activeType}</p>
    </div>
  )
}

export default Menu
