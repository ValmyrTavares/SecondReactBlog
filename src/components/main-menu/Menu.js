import React from 'react'
import {NavLink} from  "react-router-dom"
// import '../../style.scss'
//Estou mexendo somente na feature 1


function Menu() {
    return (
        <div>
            <NavLink to="/" end >Home</NavLink>
         
            <a href="#artigo">Artigo</a>
            <a href="#contato">Contato</a>
            <NavLink to="/admin" end >Admin</NavLink>
           
        </div>
    )
}

export default Menu
