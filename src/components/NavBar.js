import { Dropdown } from 'react-bootstrap';
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
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Catalogo
  </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">ROPA ADULTO</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">ROPA NIÑOS</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">ACCESORIOS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </div>
            <Cartwidget />
        </div>

    )
}

export default NavBar;
