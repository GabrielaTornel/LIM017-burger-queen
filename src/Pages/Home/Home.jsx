import React, { useState, useContext, useEffect } from "react";
import "./Home.css";

import { Lunch } from "../../Components/Items/Lunch";
import { Breakfast } from "../../Components/Items/BreakFast"
import { cartContext } from "../../Context/CartContext";
import NavBar from "../../Components/NavBar/NavBar";
import { Additional } from "../../Components/Items/Additional";
import swal from "sweetalert";
/*import { collectionOrder } from '../../FirebaseConfig/FirestoreDB';
 */
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB";

import { useNavigate } from "react-router-dom";

export const Home = () => {
  // const navigate = useNavigate();
  const [changeState, setTChangeState] = useState(1);
  const [total, setTotal] = useState(0);
  const { cart, setCart, customer, setCustomer, table, setTable } = useContext(cartContext);
  const navigate = useNavigate;

  useEffect(() => {
    const reduceNewO = cart.reduce((acumulador, item) => {
      return (acumulador += item.price);
    }, 0);
    setTotal(reduceNewO);
  }, [cart, total]);

  function toggleTab(i) {
    setTChangeState(i);
  }

  const handleCustomerName = (e) => {
   setCustomer(e.target.value);
  };
  const handleNumberTable = (e) => {
    setTable(e.target.value);
   };

  // funcion para enviar pedido
  const handleSendOrder = async () => {
    await addDoc(collection(db, "order"), {
      customer: customer || null,
      mesa: table|| null, 
      pedido: cart,
      // orden: orden,
      status: "Pendiente",
      date: Timestamp.fromDate(new Date()),
      total: total || null,
    });
    swal(
      "Pedido enviado a cocina",
      "Puede consultar el estado de su pedido",
      "success"
    );
  };

  //Eliminar productos
  const handleDelete = (i) => {
    const cartTemp = [...cart];
    cartTemp.splice(i, 1);
    setCart(cartTemp);
  };
  /*   const handleSendOrder =  () => {
    collectionOrder()
      .then(() =>
      swal("Pedido enviado a cocina", "Puede consultar el estado de su pedido", "success")
    ).catch((error) =>
    console.log(error))
    }  */

  return (
    <div className="container-home ">
      <table className="table-container-waiter">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="colum1">
              <NavBar />
            </td>
            <td className="menu-items">
              <div className="container-tabs">
                <h1 className="title-pages">Menu</h1>
                <div className="bloc-tabs">
                  <button
                    className={changeState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    {" "}
                    Desayuno
                  </button>

                  <button
                    className={changeState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    {" "}
                    Almuerzo
                  </button>

                  <button
                    className={changeState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    {" "}
                    Adicional
                  </button>
                </div>
                <div className="containerItems">
                  <div className="content-tabs">
                    <div
                      className={
                        changeState === 1
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <Breakfast />
                    </div>
                    <div
                      className={
                        changeState === 2
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <Lunch />
                    </div>
                    <div
                      className={
                        changeState === 3
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <Additional />
                    </div>
                  </div>
                </div>
              </div>{" "}
            </td>
            <td className="conteinerOrder">
              <div className="take-order">
                <input
                  type="text"
                  name="name"
                  className="nameClient"
                  defaultValue={customer}
                  placeholder="Nombre del cliente"
                  onChange={handleCustomerName}
                />
                <input
                  type="number"
                  className="table-number"
                  placeholder="N° Mesa"
                  defaultValue={table}
                  onChange={handleNumberTable}
                />
                <br></br>
                <span>Pedido:</span>
                <div className="waiter-order">
                  <ul>
                    {(cart || {}).map((item, index) => (
                      <li key={index}>
                       
                        <span className="lis-order">
                          {item.items}{" "}{item.price}$
                        </span>
                        <button
                          className="delete-items"
                          onClick={() => handleDelete(index)}
                        >
                          ❌
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
                <section className="section-total">
                <span className="price-total">TOTAL={total}$</span>
                <br></br>
                <button className="sendOrder" onClick={handleSendOrder}>
                  Enviar Orden
                </button>
                </section></td>
          </tr>
        </tbody>
      </table>
   
    </div>
  );
};









