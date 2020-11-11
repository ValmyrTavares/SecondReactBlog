import React from 'react'

function Category({articles,state,setState}) {
    return (
        <div className="category">
          <ul>
              {articles.map((item, index)=> (
                  <li key={item.title} onClick={()=> setState(index)} >{item.title}</li>
              ))}
            </ul>
        </div>
    )
}

export default Category
