import React from 'react'

function Articles({title, picture, text}) {
    return (
        <div className="articles">
            <div>
                <h2>{title}</h2>
                <img src={picture} alt="artigos"/>
            </div>          
            <p>{text}            
            </p>
        </div>
    )
}

export default Articles
