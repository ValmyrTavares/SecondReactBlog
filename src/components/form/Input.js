import React from 'react'

function Input({id, label, value,setValue, ...props}) {
    
    
    const labelStyle = {
        display:"block",
        textAlign:"center"
    }


    const input ={
        width:"80%",
         margin:"10px 10%",
         height:" 1.5rem",
         borderRadius:" 10px",
         fontFamily:" Arial, Helvetica, sans-serif",
         fontSize:"1rem"
    }


    return (
        <div>
           <label style={labelStyle} htmlFor={id}>{label}</label>
            <input style={input} id={id} name={id} value={value}
            onChange={({target})=> setValue(target.value)} {...props}/>
        </div>
    )
}

export default Input
