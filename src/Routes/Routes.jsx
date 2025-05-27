import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import BlogPost from "../Pages/Blogs/BlogPost";
import BlogPost2 from "../Pages/Blogs/BlogPost2";
import BlogPost3 from "../Pages/Blogs/BlogPost3";
import Register from "../Pages/Register/Register";
import Albums from "../Pages/Albums/Albums";
import Collections from "../Pages/Collections/Collections";
import Styles from "../Pages/Styles/Styles";
import Genres from "../Pages/Genres/Genres";
import Popular from "../Pages/Popular/Popular";
import Prompting from "../Pages/Prompting/Prompting";
import Login from "../Pages/Login/Login";
// import Explore from "../Pages/Explore/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "features",
          },
        ],
      },
      {
        path: "/albums",
        element: <Albums></Albums>,
      },
      {
        path: "/collections",
        element: <Collections></Collections>,
      },
      {
        path: "/styles",
        element: <Styles></Styles>,
      },
      {
        path: "/genres",
        element: <Genres></Genres>,
      },
      {
        path: "/popular",
        element: <Popular></Popular>,
      },
      {
        path: "/prompting",
        element: <Prompting></Prompting>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog-post-0001",
        element: <BlogPost></BlogPost>,
      },
      {
        path: "/blog-post-0002",
        element: <BlogPost2></BlogPost2>,
      },
      {
        path: "/blog-post-0003",
        element: <BlogPost3></BlogPost3>,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
