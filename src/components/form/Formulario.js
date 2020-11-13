import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import axios from 'axios'
import Button from './Button'

function Formulario() {
    const [postagem, setPostagem] = React.useState({
        title:"",
        image:"",
        text: ""        
    })

    function handleSubmit(event){
        event.preventDefault(event)
        console.log(postagem)
        axios.post(" http://localhost:3000/articles",postagem)
    }   

    function handleChange({target}){
        const {id, value} = target;
        setPostagem({...postagem, [id]:value})
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
           <Input label="Titulo"   type="text" id="title"  value={postagem.title} onChange={handleChange}/>
           <Input label="Imagem" type="text" id="image"  value={postagem.image} onChange={handleChange}/>
           <TextArea label="Texto" id="text"  value={postagem.text} onChange={handleChange}/>
           <Button texto="Enviar"/>         
        </form>
    )
}

export default Formulario
