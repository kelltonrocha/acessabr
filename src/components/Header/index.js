import React from "react";
import './style.scss';
import logoAcessaBR from '../../images/logoAcessaBR.svg'
import logoEbac from '../../images/logo_ebac.svg'

const Header = props => { //ao invés de usar vazio, posso passar PROPS e usar propriedades (ex: city e state)
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBR} alt="Logo AcessaBR"/>
                <span className="header__city">
                     / {props.city} - {props.state}
                </span>
            </div>
            <div className="header__logo header__logo--ebac">
                <span className="header__apoio">
                    Apoio:
                </span>
                <img src={logoEbac} alt="Logo EBAC"/>
            </div>
        </header>
    )
}

export default Header;