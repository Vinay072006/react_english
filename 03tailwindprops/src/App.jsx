import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <h1 className="text-3xl font-bold text-blue-600">
      Tailwind is working 🚀
       <button className="px-4 py-2 bg-red-500 text-white rounded">
             Red
            </button>
    </h1>
  )
}


export default App
