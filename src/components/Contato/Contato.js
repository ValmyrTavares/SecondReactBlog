import React from 'react'
import BoxContato from './BoxContato'
import {AiOutlineMail}from "react-icons/ai"
import {FaPhoneAlt}from "react-icons/fa"
import {BsChatSquareDots}from "react-icons/bs"
import Footer from './Footer'

function Contato() {
    return (
        <div className="contato" id="contato">
            <h1>Como você prefere falar com a gente?</h1>
            <section>
            <BoxContato contato="EuteAjudo@bank.com" texto="Tem alguma dúvida"  forma="E-mail" icone={<AiOutlineMail size={30} color="black"/>}/>
            <BoxContato contato="0800-233233" texto="Você pode ligar a qualquer hora" forma="Telefone" icone={<FaPhoneAlt size={30} color="black"/>} />
            <BoxContato contato="Clique para começar" texto="Precisa de ajuda agora?" forma="Chat" icone={<BsChatSquareDots size={30} color="black"/>} />
            </section>
            <Footer/>
        </div>
        
    )
}


export default Contato
