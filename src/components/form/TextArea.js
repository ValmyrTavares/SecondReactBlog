import React from 'react'

function TextArea({id, label, name, value, setValue, ...props}) {
    return (
        <div>
              <label htmlFor={id}>{label}</label>
              <textarea type="text" id={id} name={name} value={value} onChange={({target}) => setValue(target.value)} {...props}></textarea>
        </div>
    )
}

export default TextArea
