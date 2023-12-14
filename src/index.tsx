import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import SliderProvider from './providers/SliderProvider/SliderProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <SliderProvider>
    <App />
  </SliderProvider>
)
