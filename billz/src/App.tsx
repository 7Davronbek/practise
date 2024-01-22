import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
// @ts-ignore
import {Main} from "@/page";
// @ts-ignore
import {ScrollToTop, Navbar} from "@/component"

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
            <ToastContainer/>
            <ScrollToTop/>
        </>
    );
};

export default App;