import React from 'react'


function BoxContato({icone ,forma ,texto, contato}) {
    return (
        <div className="box-contato">
            <hr/>
            <i>{icone}</i>
            <h4>{forma}</h4>
            <p>{texto}</p>
            <h5>{contato}</h5>
        </div>
    )
}

export default BoxContato


{/* <hr/>
            <i><AiOutlineMail size={30} color="black"/></i>
            <h4>Eu sou o Box Contato</h4>
            <p>Tem alguma dúvida</p>
            <h5>meajuda@nubank.com</h5> */}