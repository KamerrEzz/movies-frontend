import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoginRequest } from "../actions/index";
import googleicon from "../assets/static/google-icon.png";
import twitter from "../assets/static/twitter-icon.png";
import "../assets/style/components/Login.scss";

const Login = (props) => {
  const [datos, guardarDatos] = useState({
    email: "",
  });

  //datos del formularios
  const handleInput = () => {
    guardarDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumit = (event) => {
    event.preventDefault();
    props.LoginRequest(datos);
    props.history.push("/")
    console.log(datos);
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSumit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="passpord"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />

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
          <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapStateToProps = {
  LoginRequest,
};

export default connect(null, mapStateToProps)(Login);
