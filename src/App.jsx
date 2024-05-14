
import {React, } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Navbars from './components/Navbars'
import Home from './components/Home/Home'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
      {/* <Navbar /> */}
      <Navbars />
      <Home />
      <Footer />

    </div>
      
    </>
  )
}

export default App
