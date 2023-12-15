import { useEffect, useRef } from 'react'

import 'swiper/scss/effect-fade'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import './sliderWrapper.scss'
import { Navigation, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

import { useSlider } from '../../hooks/useSlider'
import NestedSlider from '../NestedSlider/NestedSlider'
import { eventType } from '../../types/types'

const SliderWrapper: React.FC = () => {
  const { eventList, selected, changeSelected } = useSlider()
  const sliderRef = useRef<SwiperRef>(null)

  const handleChange = (): void => {
    if (!sliderRef.current) return

    const { activeIndex } = sliderRef.current.swiper
    if (activeIndex === selected) return
    changeSelected(activeIndex)
  }

  useEffect(() => {
    if (!sliderRef.current) return

    const { activeIndex } = sliderRef.current.swiper
    if (activeIndex === selected) return
    sliderRef.current.swiper.slideTo(selected)
  }, [selected])

  const swiperParams = {
    ref: sliderRef,
    slidesPerView: 1,

    navigation: {
      nextEl: '.sliderWrapper__button-next',
      prevEl: '.sliderWrapper__button-prev',
    },
    pagination: {
      Draggable: true,
      clickable: true,
    },
    modules: [Navigation, EffectFade, Pagination],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    onSlideChange: handleChange,
    className: 'sliderWrapper',

    allowTouchMove: false,
  }

  return (
    <Swiper {...swiperParams}>
      {eventList.map(({ id, events }: { id: number; events: eventType[] }) => {
        return <SwiperSlide key={id}>{<NestedSlider events={events} />}</SwiperSlide>
      })}
      <div className="sliderWrapper__fraction">{`${String(selected + 1).padStart(2, '0')} / ${String(
        eventList.length
      ).padStart(2, '0')}`}</div>
      <button className="sliderWrapper__button-prev"></button>
      <button className="sliderWrapper__button-next"></button>
    </Swiper>
  )
}

export default SliderWrapper
