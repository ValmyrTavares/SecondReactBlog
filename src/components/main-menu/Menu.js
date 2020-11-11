import React from 'react'
import {NavLink} from  "react-router-dom"
// import '../../style.scss'


function Menu() {
    return (
        <div>
            <NavLink to="/" end >Home</NavLink>
            <NavLink to="/artigo" end >Artigos</NavLink>
            <NavLink to="/admin" end >Admin</NavLink>
            <NavLink to="/contato" end >Contato</NavLink>
        </div>
    )
}

export default Menu
