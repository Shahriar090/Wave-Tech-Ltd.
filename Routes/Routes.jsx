import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../src/Main/Main";
import Home from "../src/Components/Home/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path : '/',
            element: <Home></Home>
        }
      ]
    },
  ]);