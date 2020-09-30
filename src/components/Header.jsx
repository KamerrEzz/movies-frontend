import React from 'react'
import '../assets/style/components/Header.scss'

import logo from '../assets/static/logo.jpg'

const header = () => {
    return (
    <header className="header">
        <img className="header__img" src={logo} alt="Kamerrsito" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt="user-icon"/>
                <p>Perfil</p>
            </div>
            <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
    </header>
    )
}

export default header
