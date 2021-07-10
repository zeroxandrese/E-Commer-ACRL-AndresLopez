import { createContext, useState } from "react";

export const cartContext = createContext({});

export const CartProvider = ({ children }) =>{
    const [carrito, setCarrito] = useState([]);
    const vaciarCarrito = () => setCarrito([]);
    const añadirCarrito = (item , cantidad) => {
        if (estaEnCarrito(item.ID)) {
            const nuevoCarrito = carrito.map(elementoCarrito =>{
                if(elementoCarrito.ID === item.ID){
                    return{...elementoCarrito, cantidad: elementoCarrito.cantidad + cantidad}
                }else return elementoCarrito;
            })
            setCarrito(nuevoCarrito);
        }else{setCarrito(previo => [...previo, {...item, cantidad}])}};

    const estaEnCarrito = id => carrito.some(item => item.ID === id);

    return <cartContext.Provider value={{ carrito, setCarrito, vaciarCarrito, añadirCarrito, estaEnCarrito }}>
        { children }
    </cartContext.Provider>
    }