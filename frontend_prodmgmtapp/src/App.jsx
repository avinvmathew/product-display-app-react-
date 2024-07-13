import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Records from './components/Records'
import Add from './components/Add'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Records/>}/>
        <Route path='/add' element={<Add movie={{title:'',price:'',category:'',image:''}}/>}></Route>
        {/* <Route path='/add' element={<Add/>}/> */}
      </Routes>
      <video autoPlay loop muted id='video'>
        <source src='https://videos.pexels.com/video-files/5818973/5818973-uhd_2560_1440_24fps.mp4'/>
      </video>
    </>
  )
}

export default App
