import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FetchData from "./componets/FetchData";
import Navbar from "./componets/Navbar";
import PostPage, { loader as blogPostLoader } from "./pages/PostPage";
import SinglePostPage, {
  loader as singlePostLoader,
} from "./pages/SinglePostPage";
import ErrorHandler from "./componets/ErrorHandler";
import YupFormikDemo from "./pages/YupFormikDemo";
import HookFormPage from "./pages/HookFormPage";
import MUI from "./pages/MUI";
import EditorPage from "./pages/EditorPage";
import Cursor from "./componets/cursor/Cursor";
import SplineDemo from "./componets/spline/SplineDemo";
import DoughnutChartPage from "./componets/doughnut-chart/DoughnutChartPage";
import PaginationPage from "./componets/pagination/PaginationPage";
import MyPagination from "./react-paginate/ReactPaginatePage";
import ReactPaginatePage from "./react-paginate/ReactPaginatePage";
import ReactHooksPaginator from "./ReactHooksPaginator";
import SearchPage from "./pages/search/SearchPage";
import CorsPage from "./pages/cors/CorsPage";
import CartImpl from "./componets/CartImpl.jsx";
import PdfDownloader from "./componets/pdf-downloader/PdfDownloader.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Navbar />}>
//       <Route index element={<FetchData />} />
//       <Route path="pagination" element={<Pagination />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <FetchData /> },
     // { path: "/pagination", element: <Pagination /> },
      {
        path: "/post",
        element: <PostPage />,
        loader: blogPostLoader,
        errorElement: <ErrorHandler />,
      },
      {
        path: "/post/:id",
        element: <SinglePostPage />,
        loader: singlePostLoader,
        errorElement: <ErrorHandler />,
      },
      {
        path: "/formik",
        element: <YupFormikDemo />,
      },
      {
        path: "/pdf-download",
        element: <PdfDownloader />,
      },
      {
        path: "/react-hook-paginator",
        element: <ReactHooksPaginator />,
      },
      {
        path: "/react-paginate-page",
        element: <ReactPaginatePage currentItems={2} />,
      },
      {
        path: "/chart",
        element: <DoughnutChartPage />,
      },
      {
        path: "/hookform",
        element: <HookFormPage />,
      },
      {
        path: "/cart-impl",
        element: <CartImpl />,
      },
      {
        path: "/cors-page",
        element: <CorsPage />,
      },
      {
        path: "/mui",
        element: <MUI />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/pagination-page",
        element: <PaginationPage />,
      },
      {
        path: "/editor",
        element: <EditorPage />,
      },
      {
        path: "/cursor",
        element: <Cursor />,
      },
      {
        path: "/spline",
        element: <SplineDemo />,
      },
      {
        path: "/offtop",
        element: <DoughnutChartPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
