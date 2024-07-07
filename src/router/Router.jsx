import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from '../page/Home';
import Signup from '../page/Signup';
import Login from '../page/Login';
import ErrorPage from '../page/ErrorPage';
import ItemDetailes from '../page/ItemDetailes';
import Cart from '../page/Cart';




export default function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
          errorElement: <ErrorPage/>
        },
        {
          path: "/Login",
          element: <Login/>,
        },{
          path: "/Signup",
          element: <Signup/>,
        },
        {
          path:'/ItemDetailes/:id',
          element:<ItemDetailes/>
        },
        {
          path:'/Cart',
          element:<Cart/>
        }
      ]);

  return (
    <RouterProvider router={router} />
  )
}