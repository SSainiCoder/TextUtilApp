import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">{props.Title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.About}</Link>
              </li> */}
            </ul>               
            <form className="d-flex" role="search">
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="text-secondary form-check-label" forHTML="flexSwitchCheckDefault" >{props.modeName}</label>
          </div>
            </form>
          </div>
        </div>
      </nav>  
    </>
  )
}

Navbar.propTypes = {
    Title: PropTypes.string.isRequired,     //to check that we don't need undefined title
    About: PropTypes.string.isRequired   
};

Navbar.defaultProps ={
    Title: "TextInfo",
    About: "About"   
}

