import React from 'react'
import  {Link}  from "react-router-dom";

const Navbar = ({ brand }) => {
  return (
    <header className='bg-dark text-white d-flex flex-wrap justify-content-around py-3 mb-4 border-bottom'>
      <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" href="https://adalcat.github.io/DinoAPP/">
        <img style={{width: "30px"}} alt="dino" src="favicon.png"/>
        {brand}
      </a>
      <ul className="nav d-flex justify-content-around align-items-start">
        <li className='nav-item bg-white me-2'>
          <Link className="nav-link active text-black" to="/aboutapi">Sobre la API</Link>
        </li>
        <li className='nav-item bg-white'>
          <Link className="nav-link active text-black" to="/aboutus">Los creadores</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar