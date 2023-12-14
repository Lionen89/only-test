import React, { useLayoutEffect, useEffect, useRef } from 'react'

import gsap from 'gsap'
import './curclePagination.scss'

import CurcleButton from '../CurcleButton/CurcleButton'
import { EventList } from '../../types/types'
import { useSlider } from '../../hooks/useSlider'

type curclePaginationProps = {
  onClick: (id: number) => React.MouseEventHandler
  points: EventList[]
}

const CurclePagination: React.FC<curclePaginationProps> = ({ onClick, points }) => {
  const { selected, eventList } = useSlider()
  const prevSelectedRef = React.useRef(selected)
  const numberPoints = points.length

  const pagination = useRef(null)
  const ctx = useRef()

  useLayoutEffect(() => {
    if (!prevSelectedRef.current) return
    const ctx = gsap.context(() => {}, pagination)

    return () => ctx.current.revert()
  }, [ctx])

  useEffect(() => {
    if (prevSelectedRef.current === selected) return
    const indexPrev = eventList.findIndex((el) => el.id === prevSelectedRef.current)
    const arr = [...Array(numberPoints)].map((_, i) => eventList[(indexPrev + i) % numberPoints].id)
    const angle =
      arr.indexOf(selected) > numberPoints / 2
        ? (360 / numberPoints) * ((numberPoints - arr.indexOf(selected)) % numberPoints)
        : -(360 / numberPoints) * arr.indexOf(selected)

    gsap.to('.pagination', { rotation: `+=${angle}` })
    gsap.to('.curcleButton__content', { rotation: `-=${angle}` })
    prevSelectedRef.current = selected
  }, [selected])

  return (
    <div ref={pagination} className="pagination">
      {points.map(({ id }) => (
        <CurcleButton key={id} onClick={onClick(id)} active={id === selected} pointName={id + 1} />
      ))}
    </div>
  )
}

export default CurclePagination
