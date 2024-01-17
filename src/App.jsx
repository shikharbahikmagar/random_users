import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [num, setNum] = useState()

  return (
      <div className='rounded-sm h-auto bg-gray-300'>
          <form>
          <h2 className='mt-5'>Enter Number of users</h2>
          <input onChange={(e) => {setNum(e.target.value)}} className='mt-2 rounded-xl' type="text" /> <br /><br />
          <Link to={`users/${num}`}>
          <button type='submit' className='bg-purple-400 mb-4 rounded-xl px-2'>Submit</button>
          </Link>
          </form>
      </div>
  )
}

export default App
