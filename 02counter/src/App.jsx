import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState (0)

  function addvalue(){
    setCounter ((counter) => counter + 1)
    setCounter ((counter) => counter + 1)
  }

  function removeValue(){
    setCounter (counter - 1)
  }

  return (
    <>
    <h1>Counter value : {counter}</h1>
    <button onClick={addvalue}>Add_Value</button>
    <button onClick={removeValue}>Remove_Value</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
