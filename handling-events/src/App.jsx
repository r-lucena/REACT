import { useState } from 'react'
import MouseClicker from './MouseClicker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MouseClicker/>
    </>
  )
}

export default App
