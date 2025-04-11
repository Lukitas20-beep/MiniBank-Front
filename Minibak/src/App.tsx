import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/MB.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Arthur5502/MiniBank-Front.git" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>MiniBank</h1>
      <div className="card">
        <button>
          Login
        </button>
        <p>
          Welcome to our banking app! Here, you can manage your finances with ease.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the MiniBank logo to learn more
      </p>
    </>
  )
}

export default App
