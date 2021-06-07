import React,{useReducer} from 'react'

const inicial =0;



const reduzir=(estado,acao)=>{
    switch(acao){
        case 'aumentar':
            return estado +1;
        case 'diminuir':
             if(estado > 1){
                 return estado -1
             }else{
                 return 0
             }
            
        case 'reset':
            return inicial;

        default :
        return estado;
    }
    
}




function Contador() {

    const [contador,despachar]=useReducer(reduzir,inicial);


    return (
        <div>

            <h4>{contador}</h4>
            <button onClick={()=>{despachar('aumentar')}}>+</button>
            <button onClick={()=>{despachar('diminuir')}}>-</button>
            <button onClick={()=>{despachar('reset')}}>reset</button>
        </div>
    )
}

export default Contador
