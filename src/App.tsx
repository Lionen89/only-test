import React from 'react'
import './app.scss'
import Title from './components/Title/Title'
import Menu from './components/Menu/Menu'
import { useSlider } from './hooks/useSlider'
import { mockData } from './utils/data'
import SliderWrapper from './components/SliderWrapper/SliderWrapper'

const App: React.FC = () => {
  const { setEventList, eventList, changeSelected } = useSlider()

  React.useEffect(() => {
    setEventList(mockData)
    changeSelected(mockData[0].id)
  }, [])

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Title text={'Исторические даты'} />
          {eventList.length !== 0 && (
            <>
              <Menu />
              <SliderWrapper />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
