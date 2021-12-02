import React, {useState} from "react"
import {mercadoId} from "../../../redux/actions/mercadoPago.actions"
import { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
// /* import s from './components/Checkout.module.css'; */


const Checkout = () => {
const dispatch = useDispatch();
const {datos} = useSelector(state => state.mercadoPago)

useEffect(() => {
  dispatch(mercadoId())
  console.log("DATOS MERCADO PAGO", datos)
},[dispatch])

useEffect(()=>{
    const script = document.createElement('script'); //Crea un elemento html script
  
   const attr_datos_preference = document.createAttribute('datos-preference-id') //Crea un nodo atribute
   attr_datos_preference.value = datos.id  //Le asigna como valor el id que devuelve MP

  //Agrega atributos al elemento script
  script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";  
  script.setAttributeNode(attr_datos_preference)  
  
  //Agrega el script como nodo hijo del elemento form
  document.getElementById('form1').appendChild(script)
  return () =>{
    //Elimina el script como nodo hijo del elemento form
    document.getElementById('form1').removeChild(script);
  }
 },[datos])


 const productos = [
    {title: "Producto 1", quantity: 5, price: 10.52},
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ]
    return(
        <div>

      <form id='form1'>

        <h4>Checkout</h4>
        <div 
        // // className={s.gridContainer} 
        >  
        {productos.map((producto, i) => {
            return(
                <div 
                // className={s.products}
                 key={i}>
                  <ul 
                //   className={s.ul} 
                  >
                    <li>{producto.title}</li>
                    <li>{'$' + producto.price}</li> 
                    <li>{producto.quantity}</li>
                  </ul>
                </div>   
            )
        })}
        </div>   
      </form>

     </div>
    )
}

export default Checkout;