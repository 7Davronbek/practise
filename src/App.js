import React, { useState } from 'react'
import Language from './componets/Language'
import Navbar from './componets/Navbar'

const App = () => {
  const [lang, setLang] = useState(false)
  const [modal, setModal] = useState(true)
  return (
    <div className='App'>
      <Language lang={lang} setLang={setLang} setModal={setModal} modal={modal} />
      {lang ? <>ru</> : <>uz</>}
      <Navbar />
    </div>
  )
}

export default App