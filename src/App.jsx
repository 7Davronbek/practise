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
      { path: "/post", element: <PostPage />, loader: blogPostLoader },
      { path: "/post/:id", element: <PostPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
