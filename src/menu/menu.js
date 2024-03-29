import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {

    render() {

        return (

            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                <NavLink to="/" className="navbar-brand">Mi Proyecto</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" className="nav-link">Servicios </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link">Contacto </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>

        )

    }

}

export default Menu;