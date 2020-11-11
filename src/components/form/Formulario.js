import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import axios from 'axios'
import Button from './Button'

function Formulario() {
    const [postatem, setPostagem] = React.useState({
        title:"",
        image:"",
        text: ""        
    })

    function handleSubmit(){

    }
    


    return (
        <form className="formulario" onSubmit={handleSubmit}>
           <Input label="Titulo" type="text" id="title" placeholder="Titulo do Artigo" value={setPostagem.title} setValue={setPostagem}/>
           <Input label="Imagem" type="text" id="imagem" placeholder="Imagem do Artigo" value={setPostagem.image} setValue={setPostagem}/>
           <TextArea label="Texto" id="Texto" placeholder="Escreva seu Artigo" value={setPostagem.text} setValue={setPostagem}/>
           <Button texto="Enviar"/>
          

        </form>
    )
}

export default Formulario
