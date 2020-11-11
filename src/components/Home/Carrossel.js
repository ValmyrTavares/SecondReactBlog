import React from 'react'
import '../../style.scss'
import { FiArrowRight, FiChevronsLeft } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import axios from 'axios'

function Carrossel() {    
  
    let [count, setCount] = React.useState(0)
    const [artigo, setArtigo] = React.useState(null)

    const images = [
        "https://i.pinimg.com/564x/3a/f2/a2/3af2a23aad84a83ace5caadc1ffa5789.jpg",
        "https://i.pinimg.com/564x/e4/ce/ff/e4ceffb753ab5460bd0c852f4ecf0e2a.jpg",
        "https://i.pinimg.com/564x/49/1c/16/491c16335b83bf7863252a448d264db4.jpg",
        "https://i.pinimg.com/564x/62/1d/2c/621d2c972e0490985efd5c77fdf1ac13.jpg"
    ]   

    React.useEffect(()=> {
       fetch("http://localhost:3000/imagens")
       .then(r => r.json())
       .then(r => setArtigo(r))
       
    },[])

    React.useEffect(() => {
        const stop =  setInterval(()=>{   
        
            if(count>3)  setCount(0)
            else           
            setCount(count++)  
          },2000)         
          return ()=> clearInterval(stop)
    }, [count])     
    
    function  increase (){          
         if(count===images.length-1)setCount(0)
         else setCount((count)=> count +1)   
         
    }

    function decrease(){               
        if(count===0)setCount(3)
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
