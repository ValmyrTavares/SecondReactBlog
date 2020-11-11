import React from 'react'
import Input from './Input'
import TextArea from './TextArea'

function Formulario() {
    const [title, setTitle] = React.useState("")
    const [imagem, setImagem] = React.useState("")
    const [text, setText] = React.useState("")

    return (
        <div className="formulario">
           <Input label="Titulo" type="text" id="title" placeholder="Titulo do Artigo" setValue={setTitle}/>
           <Input label="Imagem" type="text" id="imagem" placeholder="Imagem do Artigo" setValue={setImagem}/>
           <TextArea label="Texto" id="Texto" placeholder="Escreva seu Artigo" setValue={setText}/>
           
        </div>
    )
}

export default Formulario
