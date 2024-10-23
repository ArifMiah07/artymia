import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import BlogPost from "../Pages/Blogs/BlogPost";
// import Explore from "../Pages/Explore/Explore";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
              path: '/',
              element:  <Home></Home>,
              children: [
                {
                  path: 'features'
                }
              ]
          },
          {
            path: '/blogs',
            element: <Blogs></Blogs>,
          },
          {
            path: '/blog-post-0001',
            element: <BlogPost></BlogPost>
          }
        ]  
    },
  ]);

  export default router


