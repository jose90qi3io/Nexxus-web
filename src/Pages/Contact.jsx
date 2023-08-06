import React from 'react'
/* Importacion de Componetes */
import NavBar from "../Components/NavBar";
/* Importacion de Estilos */
import "../Styles/Contact.css";
/* EmailJS */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import env from "react-dotenv"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(`Nexxus_w0x8llw`, `template_zrvli5t`, form.current, `88VaSyvACL_wtYiOX`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
    
    <div className="img-C">
        <NavBar />
    </div>

    <div className='formulario'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="nombre_usuario" />
      <label>Email</label>
      <input type="email" name="correo_usuario" />
      <label>Numero</label>
      <input type="number" name="numero_telefono" />
      <label>Empresa</label>
      <input type="text" name="company_name" />{/*  */}
      <label>Message</label>
      <textarea name="mensaje" />{/*  */}
      <input type="submit" value="Send" />
    </form>
    </div>

    </div>

    
  )
}

export default Contact
