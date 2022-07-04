import React, { useEffect, useState } from "react";
// import { userContext } from '../../FirebaseConfig/authContext';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirestoreDB";
import Navbar from "../../Components/NavBar/NavBar";
// import { cartContext } from "../../Context/CartContext";
import "./kitchen.css";
export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const changeStatus = async (id) => {
    try {
      const idRef = doc(db, "order", id);
      await updateDoc(idRef, {
        status: "listo para entregar",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let array = [];
      const querySnapshot = await getDocs(collection(db, "order"));

      querySnapshot.forEach((doc) => {
        const dataOrder = { ...doc.data(), id: doc.id };
        console.log(dataOrder);
        //  dataOrder.pedido=doc.id;
        array.push(dataOrder);
        setOrders(array);
      });
      return array;
    };
    fetchData();
  }, []);


  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="colum1">
              {" "}
              <Navbar />
            </td>
            <td className="container-order">
              <div className="targetOrder">
                {" "}
                Pedidos<br></br>
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
                    <section className="order-status">
                      {" "}
                      Estado del pedido:
                      <button
                        onClick={() => changeStatus(item.id)}
                        className="change-status"
                      >
                        {item.status}
                      </button>
                      {console.log(item)}
                    </section>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
