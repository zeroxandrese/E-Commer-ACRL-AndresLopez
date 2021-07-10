import { NavDropdown, Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import './NavBar.css';
import Cartwidget from './Cartwidget';
import { Link, useHistory } from 'react-router-dom';


function NavBar() {
    const history = useHistory();

    const selectCategory = (e) => {
        if (e.target.value)
            history.push(`/category/${e.target.value}`);
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <Link to="/">
                <h1 id="titleNav">Bienvenidos a ARCL Shop</h1>
            </Link>
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/">
                            <a className="nav-link active">Inicio</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contactenos">
                            <a className="nav-link active" >Contactanos</a>
                        </Link>
                    </li>
                    <select onChange={selectCategory}>
                        <option value="">Seleccione Categoria</option>
                        <option value="hombre">Zapatos para hombre</option>
                        <option value="mujer">Zapatos para mujer</option>
                        <option value="niño">Zapatos para niño</option>
                    </select>
                </ul>
            </div>
            <Cartwidget />
        </div>

    )
}

export default NavBar;
