import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Main} from "@/page";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {ScrollToTop, Navbar} from "@/component"
import MultipleSelectPage from "./page/multiple-select/MultipleSelectPage.tsx";
import LoginPage from "./page/login/LoginPage.tsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/multiple-select" element={<MultipleSelectPage/>}/>
            </Routes>
            <ToastContainer/>
            <ScrollToTop/>
        </>
    );
};

export default App;