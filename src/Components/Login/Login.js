import React from "react";


export default function Login() {
  
  const submitHandler = event => {
    event.preventDefault() //Evita que la pagina se refresque al hacer el submit
    //"Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change."
    const email = event.target.email.value
    const password = event.target.password.value

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email === '' || password === ''){
      console.log('Completa ambos campos')
      return;
    }

    if(email === '' && !regexEmail.test(email)){
      console.log('Ingresa una direccion de correo valida.')
      return;
    }
    
    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      console.log('Credenciales invalidas.')
    } else {
      console.log('Credenciales validas ✅, proceda.');
    }
    return;
  }

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler} >
        <label>
          <span>Email:</span>
          <br />
          <input type="email" name="email" />
        </label>
        <label>
          <br />
          <span>Password:</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
