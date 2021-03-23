import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Navbar2() {
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <NavLink className="navbar-brand" to="/"> Navbar</NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
        aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/User">User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Login">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
            
        </div>
    )
}
