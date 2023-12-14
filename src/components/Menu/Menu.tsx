import React from 'react'

import CurclePagination from '../CurclePagination/CurclePagination'
import './menu.scss'
import { useSlider } from '../../hooks/useSlider'

const Menu: React.FC = () => {
  const { changeSelected, selected, eventList } = useSlider()
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
      <CurclePagination onClick={handleClick} points={eventList} />
      <p className="menu__activeType">{activeType}</p>
    </div>
  )
}

export default Menu
