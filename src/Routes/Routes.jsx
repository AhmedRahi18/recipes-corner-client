import Main from "../Layout/Main";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefsData from "../components/ChefsData/ChefsData";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chefsData/:id',
        element: <PrivateRoute><ChefsData></ChefsData></PrivateRoute>,
        loader: ({params}) => fetch(`https://recipes-corner-server-ahmedrahi18.vercel.app/chefsData/${params.id}`)
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);

export default router;
