import React,{useContext} from 'react'
import {cartContext} from '../../Context/CartContext'

export const Orden = () => {
    const { orden, setOrden} = useContext(cartContext);
  return (
    <div className="orden-block">
    <input
      onChange={(e) => setOrden(e.target.value)}
      value={orden}
      type="number" min="1" max="15"
      placeholder="numero de mesa"
      className="mesa"
      required
    />
  </div>
  )
}