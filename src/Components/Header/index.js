import React from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../../images/logo.gif';
import portfolio from "../../images/po.gif"
import contacts from "../../images/contacts.png"
import home from "../../images/home.png"
import './Header.css'

const Header = () => {
    let navigate = useNavigate();

    return (
        <body class="">
            <header>
            <img src={logo} alt="this slowpoke moves"  width="100"  />
                <nav class="nav">
                    <u1 class="nav__list">
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#home" class="nav__link">
                            <img src={home} width="216"></img>    
                        </a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/projects")}}><a href="#portfolio" class="nav_link">
                            <img class="inbetween" src={portfolio} width="419" height="auto"></img>    
                        </a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#contacts" class="nav__link">
                            <img class="inbetween2" width="335" src={contacts}></img>
                        </a></l1>
                        
                    </u1>
                </nav>
            </header>
        </body>
    )
}

export default Header;