import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './images/ba600bdac7c84de3a4ba624d964ac1dc-free.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary" style={{background: 'linear-gradient(to right,rgb(46, 95, 125), #00796b)'}}>
      <div className="container-fluid" style={{ height: 'auto',paddingLeft:'0px',paddingRight:'0px',padding:'10px',borderRadius:'10px' }}>
            <Link className="navbar-brand" to="/" style={{ color: 'green' }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '25%',}} /> FcFund
        </Link>
        <button className="navbar-toggler text-align-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{border:'2px solid green'}}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu" style={{ width: '15rem' }}>
                <li><Link className="dropdown-item" to="/crowfunding_projects">CrowFunding Projects</Link></li>
                <li><Link className="dropdown-item" to="/charity_projects">Charity Projects</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Other Projects</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact us</Link>
            </li>
          </ul>
          <button className="btn btn-outline-warning" type="button">
            <FontAwesomeIcon icon={faUser} style={{ background: 'none' }} /> My Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;