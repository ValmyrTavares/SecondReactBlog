import React from 'react'
import LogoMarca from './LogoMarca'
import Menu from './Menu'
// import '../../style.scss'



function Header() {
    let [number, setNumber] = React.useState(0)

    function handleClick(){
       setNumber(number => number + 1)
    }
    return (
        <>
        <header>          
            <LogoMarca/>
            <Menu/>          
        </header>
        </>
    )
}

export default Header
