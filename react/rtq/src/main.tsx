import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import "bootstrap/dist/css/bootstrap.css"

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={query}>
        <App/>
    </QueryClientProvider>,
)
