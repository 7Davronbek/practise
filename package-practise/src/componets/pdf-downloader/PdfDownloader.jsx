import logo from "../../assets/react.svg";
import {useRef, useState} from "react";
import {PDFExport, savePDF} from "@progress/kendo-react-pdf";

const PdfDownloader = () => {
    const contentArea = useRef(null);
    const downloadPdf = () => {
        savePDF(contentArea.current, {paperSize: "A4"})
    }
    return (
        <>
            <div className='PdfDownloader'>
                <div ref={contentArea} className="container">
                    <PDFExport>
                        <div className="row">
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Lorem <img src={logo} alt=""/></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-5 col-12">
                                <h5>Lorem ipsum dolor sit amet.</h5>
                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                                    assumenda, eos facilis hic modi, necessitatibus, non numquam possimus quia quo
                                    reprehenderit sapiente similique tempora totam veniam? Cupiditate quaerat saepe
                                    voluptate.</p>
                            </div>
                        </div>
                    </PDFExport>
                </div>
                <button onClick={downloadPdf} className="btn btn-outline-dark">Download component
                </button>
            </div>
        </>
    )
}

export default PdfDownloader
