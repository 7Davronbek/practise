import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Cambridge from './componets/Cambridge'
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
          <Route path='/' element={<Geocode />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App