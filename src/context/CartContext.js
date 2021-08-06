import { createContext, useState, useEffect } from "react";

export const cartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalPago, setTotalPago] = useState(0);
    const vaciarCarrito = () => setCarrito([]);
    const añadirCarrito = (item, cantidad) => {
        if (estaEnCarrito(item.id)) {
            const nuevoCarrito = carrito.map(elementoCarrito => {
                if (elementoCarrito.id === item.id) {
                    return { ...elementoCarrito, cantidad: elementoCarrito.cantidad + cantidad }
                } else return elementoCarrito;
            })
            setCarrito(nuevoCarrito);
        } else { setCarrito(previo => [...previo, { ...item, cantidad }]) }
    };

    const estaEnCarrito = id => carrito.some(item => item.id === id);

    const eliminarElementoCarrito = id => {
        const nuevoCarrito = carrito.filter(element => element.id !== id)
        setCarrito([...nuevoCarrito])
    }

    useEffect(() => {
        const totalPagar = () => {
            const respuesta = carrito.reduce((previo, item) => {
                return previo + (item.precio * item.cantidad)
            }, 0)
            setTotalPago(respuesta)
        }
        totalPagar()
    }, [carrito])

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if (dataCarrito) {
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])

    return <cartContext.Provider value={{ carrito, setCarrito, vaciarCarrito, añadirCarrito, estaEnCarrito, eliminarElementoCarrito, totalPago }}>
        {children}
    </cartContext.Provider>
}








