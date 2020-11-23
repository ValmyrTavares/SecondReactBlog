import React from 'react'

function Button({texto}) {
    const xuxu ={
        padding:".5rem 1.5rem",
        borderRadius: "10px",
        backgroundColor: "rgba(68, 128, 0, 0.705)",
        color:"black",
        
    }
    return (
      <button style={xuxu}>{texto}</button>
    )
}

export default Button
