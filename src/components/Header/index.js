import React, { useContext } from "react";
import './style.scss';
import logoAcessaBR from '../../images/logoAcessaBR.svg'
import logoEbac from '../../images/logo_ebac.svg'
import { LocationContext } from "../../contexts/LocationContext";

const Header = () => { // usando contexts (ex: city e state)
    
    const {city, state} = useContext(LocationContext)
    
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBR} alt="Logo AcessaBR"/>
                <span className="header__city">
                     / {city} - {state}
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