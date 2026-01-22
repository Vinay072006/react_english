import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div
      className="min-h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 inset-x-0 flex justify-center gap-4">
        <button
          onClick={() => setColor('red')}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>

        <button
          onClick={() => setColor('blue')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>

        <button
          onClick={() => setColor('orange')}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Orange
        </button>
      </div>
    </div>
  )
}


export default App
