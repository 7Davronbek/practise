import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "@/style/main.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
)
