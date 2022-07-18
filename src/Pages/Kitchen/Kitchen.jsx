/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB";
import Navbar from "../../Components/NavBar/NavBar";
import swal from "sweetalert";
import "./kitchen.css";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);
  //const [orderUpdate, setOrderUpdate] = useState([]);
  const fetchData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(db, "order"));

    querySnapshot.forEach((doc) => {
      const dataOrder = { ...doc.data(), id: doc.id };
      //console.log(dataOrder);
      array.push(dataOrder);
      setOrders(array);
    });
    return array;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeStatusKitchen = async (id) => {
    try {
      const idRef = doc(db, "order", id);
      const changeRef = await updateDoc(idRef, {
        status: "Atendido",
      });
      const attended = swal("Su pedido ya fue atendido", "", "warning");
      idRef.status === "Pendiente" ? changeRef : attended;
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatusMesero = async (id) => {
    try {
      const idRef = doc(db, "order", id);
      const changeRef = await updateDoc(idRef, {
        status: "Entregado",
      });
      const attended = swal("Su pedido ha sido entregado", "", "success");
      idRef.status === "Atendido" ? changeRef : attended;
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const trabajador = localStorage.getItem("userEmail");
  console.log(trabajador);

  return (
    <>
      <div className="container-kitchen">
        <section className="colum1">
          {" "}
          <Navbar />
        </section>
        <div className="container-order">
          <section className="targetOrder">
            {/* {console.log(orders)} */}
            {orders.map((item, i) => (
              <div className="card-order" key={i}>
                <button className="order-information">
                  Mesa: {item.mesa} <br></br>
                  Cliente: {item.customer}
                  <br></br>
                  Total : {item.total}${/* {console.log(item)} */}
                </button>
                {item.pedido?.map((pedido, i) => (
                  <ul key={i}>
                    <li> {pedido.items}</li>
                  </ul>
                ))}
              
                  <div>
                    {trabajador === "cocina@gmail.com" ? (
                      <button
                        className="statusColor1"
                        onClick={() => changeStatusKitchen(item.id)}
                      >
                        {" "}
                        {item.status}
                      </button>
                    ) : (
                      <button
                        disabled={item.status === "Pendiente"}
                        className="statusColor2"
                        onClick={() => changeStatusMesero(item.id)}
                      >
                        {" "}
                        {item.status}
                      </button>
                    )}
                  </div>
                  {console.log(item)}
      
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
