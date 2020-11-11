import React from 'react'

function Input({id, label, value,setValue, ...props}) {
    return (
        <div>
           <label htmlFor={id}>{label}</label>
            <input id={id} name={id} value={value}
            onChange={({target})=> setValue(target.value)} {...props}/>
        </div>
    )
}

export default Input
