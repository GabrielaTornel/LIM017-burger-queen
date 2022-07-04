
import React, { useEffect ,useState, useContext} from 'react'
import { itemSortLuch } from '../../FirebaseConfig/FirestoreDB';
// import { useFirestore } from '../hooks/FirestoreConfig.js';
import {cartContext} from '../../Context/CartContext'


export const Lunch = () => {
    const [itemsLunch, setItemsLunch] = useState([]);
    const {addOrder} = useContext(cartContext)

   
   
  useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await itemSortLuch();
      // console.log('trayendo items', itemsDB)
      setItemsLunch(itemsDB)
    }
    fetchData();
  }, []);

  const addItemsToCarts = (item) => {
    addOrder(item)
  }

  return (
   <><div>
      <>
        {itemsLunch.map((item, i) => (
          <div key={i}>
            <button className="items-btn" onClick={() => addItemsToCarts(item)}>
            {item.items} {" "}{item.price} $
            </button>
          </div>
        ))}
      </>
    </div></>    
  )
}