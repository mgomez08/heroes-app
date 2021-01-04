import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">  
         <div className="container-fluid">
         <Link 
                className="navbar-brand pl-2" 
                to="/"
            >
                Asociaciones
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav me-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link pl-2" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link pl-2" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link pl-2" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            <div className="navbar-text">
                <ul className="navbar-nav m-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link pl-2" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
             </div>
            </div>
         </div>
           
        </nav>
    )
}