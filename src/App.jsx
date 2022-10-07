import { useState } from 'react'
import {RoutesJS} from './routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <RoutesJS/>
      </>
  )
}

export default App
