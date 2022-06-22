import React, { useEffect } from 'react'
import './nav.scss'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {

  const clicker = () =>{
    document.querySelector('.navbar-toggler').click();
  }

  useEffect(()=>{
    clicker()
  },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-5 sticky-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" onClick={clicker}>Re:T<span className='text-warning'>O</span>ur</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/store" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')} onClick={clicker}>Store List</NavLink>
        </li>
        <li className="nav-item">
          <Link to="/tour" className="nav-link" onClick={clicker}>Tour Locator</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            System Pages
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="" className="dropdown-item" onClick={clicker}>Page One</Link></li>
            <li><Link to="" className="dropdown-item" onClick={clicker}>Page Two</Link></li>
            <li><Link to="" className="dropdown-item" onClick={clicker}>Page Three</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Layout Variants
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="" className="dropdown-item" onClick={clicker}>Variants One</Link></li>
            <li><Link to="" className="dropdown-item" onClick={clicker}>Variants Two</Link></li>
            <li><Link to="" className="dropdown-item" onClick={clicker}>Variants Three</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/tutorials" className="nav-link" onClick={clicker}>Tutorials</Link>
        </li>

        <li className="nav-item">
          <button className='btn tour__btn' onClick={clicker}><i className="fas fa-plus"></i> Submit a Tour</button>
        </li>


      </ul>

    </div>
  </div>
</nav>

    )
}

export default Navbar
