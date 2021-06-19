import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cartwidget from './components/Cartwidget';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
        <NavBar />
        </div>
        <ItemListContainer titulo={'TENEMOS TODO LO QUE NECESITAS EN CUANTO A MODA'} parrafo={'Te ofrecemos los mejores productos, al mejor tiempo y al mejor precio, dale un vistazo a nuestro catalogo para que te enteres de todas las novedades en moda'}/>
      </div>
    );
  }
}

export default App;
