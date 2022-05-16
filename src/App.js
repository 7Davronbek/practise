import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const App = () => {
  const [all, setAll] = useState([])
  // const [name, setName] = useState('')

  const { register, handleSubmit } = useForm() 

  const onSubmit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    axios.get('https://dostavka-api.herokuapp.com/user/testing')
      .then((res) => {
        setAll(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>

      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} type="file" name="picture" />
                <button>Submit</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt consequatur impedit enim iusto facere expedita, neque, consectetur officiis accusamus aliquid! Perspiciatis, ex. Magni, consectetur nulla veniam soluta fugit totam!
            </div>
            {all?.map((item, index) => (

              <div key={index} className="col-lg-4">
                <img src={item.image} alt="" className="w-100" />
                <h5>{item.title}</h5>
              </div>

            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App