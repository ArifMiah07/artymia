import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import BlogPost from "../Pages/Blogs/BlogPost";
import BlogPost2 from "../Pages/Blogs/BlogPost2";
import BlogPost3 from "../Pages/Blogs/BlogPost3";
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
          },
          {
            path: '/blog-post-0002',
            element: <BlogPost2></BlogPost2>
          },
          {
            path: '/blog-post-0003',
            element: <BlogPost3></BlogPost3>
          }
        ]  
    },
  ]);

  export default router


