import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FetchData from "./componets/FetchData";
import Navbar from "./componets/Navbar";
import Pagination from "./componets/Pagination";
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
import Offtop from "./componets/Offtop";
import DoughnutChartPage from "./componets/doughnut-chart/DoughnutChartPage";
import PaginationPage from "./componets/pagination/PaginationPage";

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
        path: "/chart",
        element: <DoughnutChartPage />,
      },
      {
        path: "/hookform",
        element: <HookFormPage />,
      },
      {
        path: "/mui",
        element: <MUI />,
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
