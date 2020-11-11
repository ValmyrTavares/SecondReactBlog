import React from 'react'
import Articles from './Articles'
import Category from './Category'

// const articles =[
//     {
//         title: "Primeiro artigo",
//         image:"https://s3.amazonaws.com/comunitaitaliana.com/wp-content/uploads/2020/02/26145849/verona.jpg",
//         text: "A cidade foi declarada patrimônio da humanidade pela UNESCO por causa da sua estrutura urbana e arquitetura: Verona é um maravilhoso exemplo de cidade que se desenvolveu progressivamente e sem interrupções durante dois mil anos, integrando elementos artísticos de altíssima qualidade dos diversos períodos que se seguiram, representa também, em um modo excepcional o conceito de uma cidade fortificada em etapas determinantes da história europeia."
//     } ,  
//     {
//         title: "Segundo artigo",
//         image:"https://upload.wikimedia.org/wikipedia/commons/0/07/Panoramic_view_of_Colle_di_Val_d%27Elsa_alta.jpg",
//         text: "A cidade foi declarada patrimônio da humanidade pela UNESCO por causa da sua estrutura urbana e arquitetura: Verona é um maravilhoso exemplo de cidade que se desenvolveu progressivamente e sem interrupções durante dois mil anos, integrando elementos artísticos de altíssima qualidade dos diversos períodos que se seguiram, representa também, em um modo excepcional o conceito de uma cidade fortificada em etapas determinantes da história europeia."
//     } ,
//     {
//         title: "Segunda Guerra",
//         image:"https://sfo2.digitaloceanspaces.com/gd-grecia/2020/06/cal%C3%A7ada-mykonos.jpg",
//         text: "A cidade foi declarada patrimônio da humanidade pela UNESCO por causa da sua estrutura urbana e arquitetura: Verona é um maravilhoso exemplo de cidade que se desenvolveu progressivamente e sem interrupções durante dois mil anos, integrando elementos artísticos de altíssima qualidade dos diversos períodos que se seguiram, representa também, em um modo excepcional o conceito de uma cidade fortificada em etapas determinantes da história europeia."
//     } 
// ]
  


function ArtigoContainer() {
    let [modal, setModal] = React.useState(false)
    const [index, setIndex] = React.useState(1) 
    const [articles, setArticles] = React.useState(null)

    React.useEffect(()=>{
        fetch("http://localhost:3000/articles")
        .then(response => response.json())
        .then(r => setArticles(r))
    },[])




    if(articles===null)return null

    return (
        <div className="container-artigos">
           <button onClick={()=> setModal(modal=!modal)}>Categorias</button>
            {modal ? <Category className="animeModal" articles={articles} state={index} setState={setIndex} /> : null}
            <Articles title={articles[index].title} picture={articles[index].image} text={articles[index].text}/>
        
        </div>
    )
}

export default ArtigoContainer



          

        
            

