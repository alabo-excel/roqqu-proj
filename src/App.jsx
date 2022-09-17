import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './views/dashboard';
import Trade from './views/trade';
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-white bg-[#020717]">
      <Header />
      <div className="flex w-full">
        <div className="">sidebar</div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="trade" element={<Trade />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
