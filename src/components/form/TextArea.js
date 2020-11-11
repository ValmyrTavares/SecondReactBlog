import React from 'react'

function TextArea({id, label, name, value, setValue, ...props}) {



    const labelStyle = {
        display:"block",
        textAlign:"center"
    }

   const textArea = {
    width: "80%",
    margin:"10px 10%",
    height: "6rem",
    fontFamily: "Arial, Helvetica, sans-serif",
 fontSize:"1rem",
 borderRadius: "10px"
    }

    return (
        <div>
              <label style={labelStyle} htmlFor={id}>{label}</label>
              <textarea type="text" id={id} name={name} value={value} onChange={({target}) => setValue(target.value)} {...props}></textarea>
        </div>
    )
}

export default TextArea
