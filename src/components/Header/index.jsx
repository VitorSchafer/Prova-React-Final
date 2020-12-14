import React from 'react';
import Logo from '../../assets/logo-avali.png'

function Header() {
    return(
        <header className="header">
            
            <h2 className="sobre"> Sobre</h2>

            <h2 className="telefone"> Telefone</h2>

            <h2 className="loc"> Localização</h2>

            <h2 className="ajuda"> Ajuda </h2>

            <img src={Logo} alt="logo" width="200" height="200"/>
            
        </header>
    );
}
export default Header;