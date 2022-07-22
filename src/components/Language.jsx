import React from 'react'
import { getLanguage, getText } from '../locales'

const Language = () => {
    const changeLanguage = (e) => {
        localStorage.setItem("LANGUAGE", e)
        document.location.reload(true)
        console.log(e);
    }
    return (
        <>

            {/* {localStorage.getItem("LANGUAGE") === "uz" ? 'uz' : "en"} */}
            <div className='Language vh-100 d-flex align-items-center justify-content-center text-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{getText("main")}</h1>
                        </div>
                        {!localStorage.getItem("LANGUAGE") ? <>
                            <div div className="col-12">
                                <div className="d-flex align-items-center justify-content-center mt-5" >
                                    <button onClick={(e) => changeLanguage("uz")} className="btn btn-dark mx-3 py-2 px-4">Uzbek</button>
                                    <button onClick={(e) => changeLanguage("en")} className="btn btn-outline-dark py-2 px-4">English</button>
                                </div>
                            </div>
                        </> : "en"}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language