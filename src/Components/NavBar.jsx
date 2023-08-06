import React from 'react'
import '../Styles/NavBar.css'
import '../Styles/HomeMediaQueries.css'
import '../Styles/NavBarMediaQueries.css'

const NavBar = () => {
  return (
   <>
     <div className="Nav">
          <p>Nexxus</p>
          <div className="menu">
            <ul>
            <li id='burger'>
            <a href=''>----</a>
              </li>
              <li id='oc'>
                <a href={`./`}>Inicio</a>
              </li>
              <li  id='oc'>
                <a href={`/Conocenos`}>Conocenos</a>
              </li>
              <li id='oc'>
                <a href={`/Products`}>Productos</a>
              </li>
              <li id='oc'>
                <a href={`/Contactanos`}>Contactanos</a>
              </li>
            </ul>
          </div>
      </div>
   
   </>
  )
}

export default NavBar
