import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import OrderReview from './components/OrderReview/OrderReview';



const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('shirt.json')
      },
      {
        path: 'review',
        element: <OrderReview></OrderReview>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
      </React.StrictMode>,
)
