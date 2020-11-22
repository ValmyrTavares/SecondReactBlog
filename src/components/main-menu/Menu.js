import React from 'react'
import {NavLink} from  "react-router-dom"
// import '../../style.scss'
//Estou mexendo somente na feature 1


function Menu() {
    return (
        <div className="routes">
            <NavLink to="/" end >Home</NavLink>
         
            <a href="#artigo">Artigo</a>
            <a href="#contato">Contato</a>
           
            <a className="admin">
                admin
                <span>
                    <a>Artigos</a>
                    <a>Slide</a>
                </span>
            </a>



           
        </div>
    )
}

export default Menu
