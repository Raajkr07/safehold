import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      Hello world
    </div>
  )
}

export default App
