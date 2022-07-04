import React, { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {
  //estado del carrito
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState("");
  const [table, setTable] = useState("");
  const [orden, setOrden] = useState([]);
  /*   const { orden, setOrden } = useContext(UserContent); */

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
