import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    axios.get('https://laravelcrudtutorial.000webhostapp.com/api/products')
      .then((res) => {
        setState(res.data.products)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>

      {state.map((item) => {
        return (
          <>
            <h4>{item.title}</h4>
            <p>{item.created_at}</p>
          </>
          )
      })}

    </>
  )
}

export default App