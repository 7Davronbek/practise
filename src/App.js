import React from 'react'
import Header from './components/Header'
// import Language from './components/Language'
import SwiperSlider from './components/SwiperSlider'
import './style/main.css'

const App = () => {
  return (
    <>
    <Header/> 
    <div className="vh-100"></div>
    <SwiperSlider />
    {/* <Language /> */}
    </>
  )
}

export default App