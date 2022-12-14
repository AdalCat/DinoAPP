import React from 'react'

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
    <div className="container justify-content-center">
      <a className="navbar-brand" href="https://adalcat.github.io/DinoAPP/"><img style={{width: "30px"}} alt="dino" src="favicon.png"/>{brand}</a>
      <a href="/aboutapi" className="btn btn-info">Sobre la API</a>
      <a href="/aboutus" className="btn btn-info">Los creadores</a>
    </div>
  </nav>
  )
}

export default Navbar