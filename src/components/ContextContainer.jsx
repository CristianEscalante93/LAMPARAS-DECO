import React, { useState, createContext, useEffect } from 'react';

export const contextGeneral = createContext();

export default function ContextContainer({ children }) {
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(carrito.reduce((acc, item) => acc + (item.quantity*item.precio), 0));
  }, [carrito]);

  function posInCart(id) {
    const pos = carrito.findIndex((item) => item.id == id);
    return pos;
  };

  function addItem(item, quantity) {
    const pos = posInCart(item.id);
    if (pos == -1) {
      setCarrito([...carrito, { ...item, quantity }]);
    } else {
      const carritoCopia = [...carrito];
      carritoCopia[pos] = { ...carritoCopia[pos], quantity: carritoCopia[pos].quantity + quantity };
      setCarrito(carritoCopia);
    }
  };

  function removeItem(id) {
    setCarrito(carrito.filter((product) => product.id !== id));
  };

  function clear() {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito))
  }, [carrito])
  

  return <contextGeneral.Provider value={{carrito, clear, removeItem, addItem,total }}>{children}</contextGeneral.Provider>;
}
