import React, { useEffect, useState, useContext } from 'react'
import { itemSortAdditional } from '../../FirebaseConfig/FirestoreDB';
import { cartContext } from '../../Context/CartContext';


export const Additional = () => {
    const [itemsAdditional, setItems] = useState([]);

    const { addOrder } = useContext(cartContext)

    useEffect(() => {
        const fetchData = async () => {
          const itemsDB = await itemSortAdditional();
          console.log('trayendo items', itemsDB)
          setItems(itemsDB)
        }
        fetchData();
      }, []);
    
      const addItemsToCarts = (item) => {
        addOrder(item)
      }
  return (

    <><div>

      <>
        {itemsAdditional.map((item, i) => (
          <button className="items-btn" key={i} onClick={() => addItemsToCarts(item)}>
             {item.items} {" "}{item.price} $
          </button>
        ))}
      </>

    </div>
    </>
  )
}
