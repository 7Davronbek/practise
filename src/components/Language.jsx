import React from 'react'

const Language = () => {
  return (
    <div className='Language vh-100 d-flex align-items-center justify-content-center text-center'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Choose language</h1>
                </div>
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center mt-5" >
                        <button className="btn btn-dark mx-3 py-2 px-4">Uzbek</button>
                        <button className="btn btn-outline-dark py-2 px-4">English</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Language