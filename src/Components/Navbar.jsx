import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import "../styles/Navbar.css";

const Navbar = () => {

  return (
    <nav className='navbar'>
      <Link to={routes.home}>
      <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
      <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
      <h4>Favs</h4>
      </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar