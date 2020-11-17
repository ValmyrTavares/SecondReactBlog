import React from 'react'
import ArtigoContainer from '../artigos/ArtigoContainer'
import Contato from '../Contato/Contato'
import Carrossel from './Carrossel'

//  import '../../style.scss'

class Home extends React.Component {  
   
    render(){
        return(
        <div className="home">           
            <Carrossel/>      
            <ArtigoContainer/>
            <Contato/>
        </div>
        )
    }
}
export default Home;
    
        