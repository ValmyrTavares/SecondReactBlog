import React from 'react'
import Button from './Button'
import Input from './Input'
import axios from 'axios'


function FormularioSlide(){
    const [slide, setSlide] = React.useState("")

    function handleSubmit(event){
        event.preventDefault(event)
        axios.post("http://localhost:3000/imagens",slide)
    }

    function handleChange({target}){       
        setSlide(target.value)
    }


    return (
        <>
        <form onSubmit="handleSubmit">
            <Input label="Novo Slide"   type="text" id="slide"  value={slide} onChange={handleChange}/>
            <Button texto="Enviar"/>
        </form>
    <p>{slide}</p>

        </>
    )
}
export default FormularioSlide