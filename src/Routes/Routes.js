/* Importacion de estilos "Boostrap" */
import"bootstrap/dist/css/bootstrap.min.css"
import"bootstrap/dist/js/bootstrap.min.js"
/* React-Router-Dom */
import { createBrowserRouter,RouterProvider } from "react-router-dom"
/* PAGES */
import React from 'react'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Error from '../Pages/Error-404.jsx'
import Contact from '../Pages/Contact.jsx'
import Products from "../Pages/Products.jsx"
import PaymentMarket from "../Pages/PaymentMarket.jsx"
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
    errorElement: <Error/>,

  },{
    path:'/Conocenos',
    element:<About/>,
    errorElement: <Error/>
  },{
    path:'/Contactanos',
    element:<Contact/>,
    errorElement: <Error/>
  },{
    path:"/Products",
    element:<Products/>,
    errorElement:<Error/>
  },{
    path:"/Pay",
    element: <PaymentMarket/>,
    errorElement:<Error/>
  }
])

const routes = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default routes


