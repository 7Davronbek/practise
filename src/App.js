import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Cambridge from './componets/Cambridge'
import Chart from './componets/Chart'
import Chart2 from './componets/Chart2'
import Navbar from './componets/Navbar'
import Geocode from './pages/Geocode'
// import SwiperSlider from './componets/SwiperSlider'

const App = () => {
  // const [lang, setLang] = useState(false)
  // const [modal, setModal] = useState(true)
  return (
    <div className='App'>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Chart2 />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App