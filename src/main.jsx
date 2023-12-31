import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "../src/App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('tShirts.json')
      },
      {
        path:'/review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
