import React, { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {
  //estado del carrito
  const [cart, setCart] = useState([]);
  //Nombre del cliente
  const [customer, setCustomer] = useState("");
  //Número de mesa
  const [table, setTable] = useState("");
  //Orden
  const [orden, setOrden] = useState([]);

  const addOrder = (newOrder) => {
    setCart([...cart, { ...newOrder, quantity: 1 }]);
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addOrder,
        customer,
        setCustomer,
        table,
        setTable,
        orden,
        setOrden,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
