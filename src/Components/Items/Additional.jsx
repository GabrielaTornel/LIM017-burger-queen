import React, { useEffect, useState, useContext } from 'react'
import { itemSortAdditional } from '../../FirebaseConfig/FirestoreDB';
import { cartContext } from '../../Context/CartContext';


export const Additional = () => {
    const [itemsAdditional, setItems] = useState([]);

    const { addOrder } = useContext(cartContext)

    useEffect(() => {
        const fetchData = async () => {
          const itemsDB = await itemSortAdditional();
          setItems(itemsDB)
        }
        fetchData();
      }, []);
    
      const addItemsToCarts = (item) => {
        addOrder(item)
      }
  return (

    <>
      <>
        {itemsAdditional.map((item, i) => (
          <button className="items-btn" key={i} onClick={() => addItemsToCarts(item)}>
             <img className='img-product' src={item.url} alt='item' width='100px' />
             <span className="items-name"> {item.items} {" "}{item.price} $</span>
            
          </button>
        ))}
      </>

    </>
  )
}
