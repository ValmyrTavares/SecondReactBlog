import React from 'react'
import '../../style.scss'
import { FiArrowRight, FiChevronsLeft } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import axios from 'axios'

function Carrossel() {    
  
    let [count, setCount] = React.useState(0)
    const [artigo, setArtigo] = React.useState(null)

     

    React.useEffect(()=> {
       axios.get("http://localhost:3000/imagens")
       .then(r => r.data)
       .then(r => setArtigo(r))
       
    },[])

    React.useEffect(() => {
        if(artigo==null)return null
        const stop =  setInterval(()=>{  
            if(count>artigo.length-1)  setCount(0)
            else           
            setCount(count++)  
          },2000)         
          return ()=> clearInterval(stop)
    }, [count])     
    
    function  increase (){          
         if(count===artigo.length-1)setCount(0)
         else setCount((count)=> count +1)   
         
    }

    function decrease(){               
        if(count===0)setCount(artigo.length-1)
        else setCount(count -1)          
       
    }
    if(artigo==null) return null
    

    return (
        <div className="carrossel">      
   
            <img src={artigo[count].img} alt="imagem"/> )    
          
            <div>
                <button onClick={decrease} ><FiArrowLeft  size={40} color="white"/>Menos</button>
                <button onClick={increase} > <FiArrowRight  size={40} color="white" />Mais</button>
            </div>                    
        </div>        
    )
}     

export default Carrossel
