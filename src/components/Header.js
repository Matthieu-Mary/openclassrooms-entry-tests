import React from 'react';
import style from "./Header.module.scss";
import logo from "../assets/images/logo-OPC.jpg"

export default function Header() {
  return (
      <header className={ `${style.header} d-flex flex-row align-center justify-center` }>
        
            <img src={ logo } alt="logo OPC" />
         
    </header>
  )
}

