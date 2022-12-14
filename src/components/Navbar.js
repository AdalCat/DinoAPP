import React from 'react'
import  {Link}  from "react-router-dom";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
    <div className="container justify-content-center">
      <a className="navbar-brand" href="https://adalcat.github.io/DinoAPP/"><img style={{width: "30px"}} alt="dino" src="favicon.png"/>{brand}</a>
     <Link className="btn btn-info"  to="/aboutapi">Sobre la API</Link>
     <Link className="btn btn-info" to="/aboutus">Los creadores</Link>
    </div>
  </nav>
  )
}

export default Navbar