/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB";
import Navbar from "../../Components/NavBar/NavBar";
import swal from "sweetalert";
import "./kitchen.css";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(db, "order"));

    querySnapshot.forEach((doc) => {
      const dataOrder = { ...doc.data(), id: doc.id };
      array.push(dataOrder);
      setOrders(array);
    });
    return array;
  };



  const changeStatusKitchen = async (id) => {
    try {
      const idRef = doc(db, "order", id);
      const changeRef = await updateDoc(idRef, {
        status: "Atendido",
      });
      const attended = swal("Su pedido ya paso a atendido", "", "warning");
      idRef.status === "Pendiente" ? changeRef : attended;
      fetchData();
    } catch (error) {}
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
    } catch (error) {}
  };


  useEffect(() => {
    fetchData();
  }, []);
  
   const employee = localStorage.getItem("userEmail");
 


  return (
    <>
      <div className="container-kitchen">
        <section className="colum1">
          {" "}
          <Navbar />
        </section>
        <div className="container-order">
          <section className="targetOrder">
            {orders.map((item, i) => (
              <div className="card-order" key={i}>
                <div className="order-information">
                  <section>
                    Cliente:<br></br> {item.customer}{" "}
                  </section>

                  <section className="tableClient">
                    {" "}
                    🪑 {item.mesa} <br></br>{" "}
                  </section>
                </div>
                {item.pedido?.map((pedido, i) => (
                  <ul key={i}>
                    <li className="kitchen-list"> {pedido.items}</li>
                  </ul>
                ))}

                <section className="total">Total : {item.total}$</section>
                <div className="statusButton">
               
                 
                  {employee === "cocina@gmail.com"  ? (
                    <button
                    disabled={item.status === "Atendido" || item.status === "Entregado"  }
                      className={item.status === "Pendiente" ? "statusColorEarring" : "statusColor3"}
                      onClick={() => changeStatusKitchen(item.id)}
                    >
                      {" "}
                      {item.status}
                    </button>
                  ) : (
                      <button
                      disabled={item.status === "Pendiente"}

                        className={item.status === "Pendiente" ? "statusColor3" : "statusColor2"
                          ?
                          item.status === "Atendido" ? "statusColor2" : "statusColor1"
                          : "statusColor3"}
                     
                      onClick={() => changeStatusMesero(item.id)}
                    >
                      {" "}
                      {item.status}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
