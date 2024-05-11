
import {React, } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Navbars from './components/Navbars'
import Home from './components/Home/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
      {/* <Navbar /> */}
      <Navbars />
      <Home />
    </div>
      
    </>
  )
}

export default App
