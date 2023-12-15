import React from 'react'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './nestedSlider.scss'
import { eventType } from '../../types/types'

type NestedSliderProps = {
  events: eventType[]
}

const swiperParams = {
  nested: true,
  slidesPerView: 2,
  navigation: true,
  spaceBetween: 25,
  modules: [Navigation],
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
}

const NestedSlider: React.FC<NestedSliderProps> = ({ events }: NestedSliderProps) => {
  return (
    <Swiper {...swiperParams} className="nestedSlider">
      {events.map(({ year, event }) => {
        return (
          <SwiperSlide key={event + year}>
            <h2>{year}</h2>
            <p>{event}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default NestedSlider
