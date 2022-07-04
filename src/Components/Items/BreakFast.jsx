import React, { useEffect, useState, useContext } from 'react'
import { itemSortbreakfast } from '../../FirebaseConfig/FirestoreDB';
import { cartContext } from '../../Context/CartContext';


export const Breakfast = () => {

  const [itemsbreakfast, setItems] = useState([]);
  
  const { addOrder } = useContext(cartContext)


  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortbreakfast();
       console.log('trayendo items', itemsDB)
      setItems(itemsDB)
    }
    fetchData();
    
  }, []);
  console.log(itemsbreakfast);
  
  const addItemsToCarts = (item) => {
    addOrder(item)
  }
  return (
    <><div>

      <>
        {itemsbreakfast.map((item, i) => (
          <div key={i}>
          <button className="items-btn" onClick={() => addItemsToCarts(item)}>
            {item.items} {" "}{item.price} $
          </button>
          </div>
        ))}
      </>

    </div>
    </>
  )
}
