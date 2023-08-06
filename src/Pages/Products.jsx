import React from 'react'
/* Importacion de Componetes */
import NavBar from "../Components/NavBar";



const Products = () => {
  return (
<>
<div className="img-C">
        <NavBar />
      </div>
      <div>
        <ul>
          <li><a href={`/Pay`} >Productos</a></li>
        </ul>
        
      </div>
</>
  )
}

export default Products
