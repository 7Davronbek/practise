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
      { path: "/pagination", element: <Pagination /> },
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
        path: "/hookform",
        element: <HookFormPage />,
      },
      {
        path: "/mui",
        element: <MUI />,
      },
      {
        path: "/editor",
        element: <EditorPage />,
      },
      {
        path: "/cursor",
        element: <Cursor />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
