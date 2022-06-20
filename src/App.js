import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Slider from './components/Slider';


const App = () => {
  const [all, setAll] = useState([])

  const [name, setName] = useState(null)
  const [file, setFile] = useState(null)
  
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
    }

  useEffect(() => {
    getAllUser()
  }, [])

  const getAllUser = () => {
    axios.get('https://dostavka-api.herokuapp.com/user/testing')
      .then((res) => {
        setAll(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    }

  const fileUploadHandler = () => {
    const formData = new FormData()
    formData.append('title', name)
    formData.append('image', file)
    axios.post('https://dostavka-api.herokuapp.com/user/testing', formData, config )
      .then((res) => {
        getAllUser()
        setName('')
        setFile('')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleEdit = (id) => {
    console.log(id);
  }

  const handleDelete = (id) => {
    axios.delete(`https://dostavka-api.herokuapp.com/user/testing/${id}`)
      .then((res) => {
        getAllUser()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>

      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-4">

              {/* <input
                name='image'
                type="file"
                onChange={fileSelectedHandler}
              /> */}
               <input type="file" name='image' accept=".png, .svg, .jpg, .jpeg" onChange={e => setFile(e.target.files[0])}/>

              <input
                name='title'
                type="text"
                onChange={e => setName(e.target.value)}
              />

              <button onClick={fileUploadHandler}>Click</button>
              {/* <img src="/assets/image" alt="" /> */}
            </div>
          </div>

          <div className="row">

            {all?.map((item, index) => (

              <div key={index} className="col-lg-4 h-100 d-flex align-items-center justify-content-center flex-column mb-5">
                <img src={item.image} alt="" className="w-100" />
                <h5>{item.title}</h5>

                <div className="d-flex align-items-center">
                  <button onClick={(id) => handleEdit(item.id)} className="btn btn-outline-dark mx-2">Edit</button>
                  <button onClick={(id) => handleDelete(item.id)} className="btn btn-outline-warning">Delete</button>
                </div>
              </div>

            ))}
          </div>
        </div>

      </div>
              
              <MouseParallaxContainer>
              <MouseParallaxChild factorX={0.03} factorY={0.05} >
                  <img src="example1.jpg" alt="" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum doloribus deleniti eos eveniet debitis aspernatur hic corporis, iure illo amet mollitia non id, voluptate nam quibusdam minima, quo illum.
              </MouseParallaxChild>
              <MouseParallaxChild factorX={0.07} factorY={0.08}>
                  <img src="example2.jpg" alt="" />
              </MouseParallaxChild> 
            </MouseParallaxContainer>

            <Slider />

    </>
  )
}

export default App

// import axios from "axios";
// import React, { useState } from "react";

// /**
//  * Component to handle file upload. Works for image
//  * uploads, but can be edited to work for any file.
//  */

// function FileUpload() {
  // State to store uploaded file
//       const [file, setFile] = useState("");
//       const [name, setName] = useState("");
//       console.log(file);
      
      

  // Handles file upload event and updates state
//   function handleUpload(event) {
//     setFile(event.target.files[0]);
    
    // Add code here to upload file to server
    // ...
//   }

//   const clicks = () => {
//     axios.post('https://dostavka-api.herokuapp.com/user/testing', {name, file})
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }

//   return (
//     <div id="upload-box">
//       <input name="image" type="file" onChange={handleUpload} />
//       <p>Filename: {file.name}</p>
//       <p>File type: {file.type}</p>
//       <p>File size: {file.size} bytes</p>
//       {file && <ImageThumb image={file} /> }
//       <input type="text" name="title"  value={name} onChange={e => setName(e.target.value)} />

//       <button onClick={clicks} className="btn">Click</button>
//     </div>
//   );
// }

// /**
//  * Component to display thumbnail of image.
//  */
// const ImageThumb = ({ image }) => {
//   return <img src={URL.createObjectURL(image)} alt={image.name} />;
// };

// export default function App() {
//   return <FileUpload />;
// }
