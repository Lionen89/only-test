import React from 'react'
import './app.scss'
import Title from './components/Title/Title'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__content">
          <Title text={'Исторические даты'} />
        </div>
      </div>
    </div>
  )
}

export default App
