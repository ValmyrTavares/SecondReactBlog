import React from 'react'
import Articles from './Articles'
import Category from './Category'

  


function ArtigoContainer() {
    let [modal, setModal] = React.useState(false)
    const [index, setIndex] = React.useState(1) 
    const [articles, setArticles] = React.useState(null)

    React.useEffect(()=>{
        fetch("http://localhost:3000/articles")
        .then(response => response.json())
        .then(r => setArticles(r))
    },[articles])




    if(articles===null)return null

    return (
        <div className="container-artigos" id="artigo">
           <button onClick={()=> setModal(modal=!modal)}>Categorias</button>
            {modal ? <Category className="animeModal" articles={articles} state={index} setState={setIndex} /> : null}
            <Articles title={articles[index].title} picture={articles[index].image} text={articles[index].text}/>
        
        </div>
    )
}

export default ArtigoContainer



          

        
            

