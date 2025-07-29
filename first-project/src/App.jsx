import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Parent from './components/parent/Parent'
import Navbar from './components/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  let [counter , setCounter] = useState(0)
 function increase(param){
   setCounter(counter+param)
 }
  return (
    <>
    <Navbar />
    <Parent />
    <Home/>
    </>
  )
}

export default App
