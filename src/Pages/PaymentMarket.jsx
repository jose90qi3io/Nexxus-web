/* Importacion de Hooks */
import { useState } from 'react';
import React from 'react'
/* Importacion de Componetes */
import NavBar from "../Components/NavBar";
/* Importacion Mercado Pago */
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"
import img from '../Img/6.png'

const PaymentMarket = () => {

  const [PreferenceId, setPreferenceId] = useState(null)

  initMercadoPago('TEST-d10b8e22-7eb8-4b22-8030-722450d41d14');

  const CreatePreference = async () =>{
  try {
    
      const responde = await axios.post("http://localhost:8080/create_preference",{
        description:"SOFTWARE ERP INVENTARIO",
        price: 100,
        quantity: 1,
/*         currency_id:"MNX" */
      })
      const {id} = responde.data
     return id
    
  } catch (error) {
    console.log(error)
  }

  }

  const handleBuy = async () =>{
    const id = await CreatePreference();
    if(id){
      setPreferenceId(id)
    }
  };

  return (
    <div>
        <div className="img-C">
        <NavBar />
      </div>
      <h1>Esto es un pay</h1>

      <div className='card-product-container'>
      <div className='card-product'>
        <div className='card'>
          <img src={img} alt='Product Image' />
          <h3>SOFTWARE ERP INVENTARIO</h3>
          <p className='price'>100 $</p>
          <button onClick={handleBuy}>Buy</button>
          {PreferenceId && <Wallet initialization={{ PreferenceId }} />}
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default PaymentMarket
