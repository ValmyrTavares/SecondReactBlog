import React from 'react'
import Button from './Button'
import Input from './Input'
import axios from 'axios'


function FormularioSlide(){
    const [slide, setSlide] = React.useState({
        img:""
    })

    function handleSubmit(event){
        event.preventDefault(event)
        console.log(slide)
        axios.post("http://localhost:3000/imagens",slide)
    }

    function handleChange({target}){       
        setSlide({img: target.value})
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <Input label="Novo Slide"   type="text" id="slide"  value={slide.img} onChange={handleChange}/>
            <Button texto="Enviar"/>
        </form>
    <p>{slide.img}</p>

        </>
    )
}
export default FormularioSlide