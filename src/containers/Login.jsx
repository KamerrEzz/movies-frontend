import React, {useState} from "react";
import {Link} from "react-router-dom";
import googleicon from '../assets/static/google-icon.png'
import twitter from '../assets/static/twitter-icon.png'
import '../assets/style/components/Login.scss'

const Login = () => {
  const [state, setstate] = useState({
    email: ""
  })

  const handleInput = event => {
    setstate({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSumit = event => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSumit}>

          <input 
          name= "name"
          className="input" 
          type="text" 
          placeholder="Correo" 
          onChange={handleInput}
          />
          <input 
          name= "passpord"
          className="input" 
          type="password" 
          placeholder="Contraseña" 
          onChange={handleInput}/>

          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" defaultValue="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleicon} /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitter} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta 
          <Link to="/register">
          Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
