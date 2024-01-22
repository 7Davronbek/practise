import React from 'react'

const Language = ({modal, setModal, lang, setLang}) => {
 
    return (
        <div className={`Language vh-100 position-fixed w-100 d-flex align-items-center justify-content-center text-center ${!modal ? 'active' : ''} `}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center align-items-center justify-content-center text-center">
                            <button onClick={() => {setModal(false); setLang(false)}} className="btn btn-outline-dark me-3">Uz</button>
                            <button onClick={() => {setModal(false); setLang(true)}} className="btn btn-outline-dark">Ru</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language