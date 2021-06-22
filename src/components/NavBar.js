import { Dropdown, NavDropdown } from 'react-bootstrap';
import React from 'react';
import './NavBar.css';
import Cartwidget from './Cartwidget';


function NavBar() {

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <h1 id="titleNav">Bienvenidos a ARCL Shop</h1>
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Quienes Somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Contactanos</a>
                    </li>
                    <NavDropdown title="Catalogo" id="basic-nav-dropdown">n
                        <NavDropdown.Item href="#action/3.1">Ropa Adultos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ropa Niños</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </div>
            <Cartwidget />
        </div>

    )
}

export default NavBar;
