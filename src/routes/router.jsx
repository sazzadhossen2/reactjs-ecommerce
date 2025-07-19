import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from '../pages/About';
import BrandDetails from '../components/BrandDetails';

export const router =createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

       {
        path:"/about",
        element:<About/>
      },

       {
        path:"/brands/:id",
        element:<BrandDetails/>
      }
    ]

  }
])