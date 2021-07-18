import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contactenos from './components/Contactenos';
import CategoryListContainer from './components/CategoryListContainer';
import { CartProvider } from './context/CartContext';
import Pago from './components/Pago';
import Carrito from './components/Carrito';
import { itemsCollection } from './firebase';


function App() {

    return (
      <div className="container-fluid">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <ItemListContainer titulo={'TENEMOS TODO LO QUE NECESITAS EN CUANTO A MODA'} parrafo={'Te ofrecemos los mejores productos, al mejor tiempo y al mejor precio, dale un vistazo a nuestro catalogo para que te enteres de todas las novedades en moda'} />
              </Route>
              <Route path="/items/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/Contactenos">
                <Contactenos />
              </Route>
              <Route path="/category/:categoryName">
                <CategoryListContainer />
              </Route>
              <Route path="/Carrito">
                <Carrito />
              </Route>
              <Route path="/Pago">
                <Pago />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </div>
    );
  }

export default App;
