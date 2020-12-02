import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/style/components/Header.scss";

import gravatar from '../utils/gravatar'
import logo from "../assets/static/logo.jpg";
import usericon from "../assets/static/user-icon.png";

const header = (props) => {
  const { user } = props;
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Kamerrsito" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={Object.keys(user).length > 0 ? gravatar(user.email) :usericon} alt="user-icon" />
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(header);
