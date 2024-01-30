import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Main} from "@/pages";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {ScrollToTop, Navbar} from "@/components"
import MultipleSelectPage from "./pages/multiple-select/MultipleSelectPage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import I18NextPage from "./pages/i18next/I18nextPage.tsx";
import SelectDaysPage from "./pages/select-days/SelectDaysPage.tsx";
import EditorJsPage from "./pages/editor-js/EditorJsPage.tsx";
import LocalStoragePage from "./pages/local-storage/LocalStoragePage.tsx";
import ZustandPage from "./pages/zustandpage/ZustandPage.tsx";
import UserRequestHandlerPage from "./pages/request-handler/UserRequestHandlerPage.tsx";
import SearchParamsPage from "./pages/search-params/SearchParamsPage.tsx";

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
                <Route path="/zustand-counter" element={<ZustandPage/>}/>
                <Route path="/request-handler" element={<UserRequestHandlerPage />}/>
                <Route path="/search-params" element={<SearchParamsPage />}/>
            </Routes>
            <ToastContainer/>
            <ScrollToTop/>
        </>
    );
};

export default App;