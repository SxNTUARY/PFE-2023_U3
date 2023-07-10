import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HolaMundo from './componentes/HolaMundo'
const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/hola",
    element: <HolaMundo/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
