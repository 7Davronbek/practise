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
import I18NextPage from "./page/i18next/I18nextPage.tsx";
import SelectDaysPage from "./page/select-days/SelectDaysPage.tsx";
import EditorJsPage from "./page/editor-js/EditorJsPage.tsx";
import LocalStoragePage from "./page/local-storage/LocalStoragePage.tsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/i18next" element={<I18NextPage/>}/>
                <Route path="/select-days" element={<SelectDaysPage/>}/>
                <Route path="/editor-js" element={<EditorJsPage/>}/>
                <Route path="/multiple-select" element={<MultipleSelectPage/>}/>
                <Route path="/local-storage" element={<LocalStoragePage/>}/>
            </Routes>
            <ToastContainer/>
            <ScrollToTop/>
        </>
    );
};

export default App;