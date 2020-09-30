import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/Header.scss";

import logo from "../assets/static/logo.jpg";
import usericon from "../assets/static/user-icon.png"

const header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Kamerrsito" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={usericon}alt="user-icon" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/login">Cuenta</Link>
          </li>
          <li>
            <Link to="/register">Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default header;
