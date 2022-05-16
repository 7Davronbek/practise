import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [all, setAll] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get('https://dostavka-api.herokuapp.com/user/testing')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0])
    // setAll(selectedFile.name)
  }

  const fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', selectedFile, selectedFile.name)
    console.log(fd);
    axios.post('https://dostavka-api.herokuapp.com/user/testing', { fd, name })
      .then((res) => {
        console.log(res);
      })
  }

  return (
    <>

      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-4">

              <input
                name='image'
                type="file"
                onChange={fileSelectedHandler}
              />

              <input
                name='title'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <button onClick={fileUploadHandler}>Click</button>
              {/* <img src="/assets/image" alt="" /> */}
            </div>
          </div>

          <div className="row">
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

// import axios from "axios";
// import React, { useState } from "react";

// /**
//  * Component to handle file upload. Works for image
//  * uploads, but can be edited to work for any file.
//  */

// function FileUpload() {
//   // State to store uploaded file
//       const [file, setFile] = useState("");
//       const [name, setName] = useState("");
//       console.log(file);
      
      

//   // Handles file upload event and updates state
//   function handleUpload(event) {
//     setFile(event.target.files[0]);
    
//     // Add code here to upload file to server
//     // ...
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
