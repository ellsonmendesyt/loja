import React,{useState} from 'react'

function Counter() {

    const [count,setCount]=useState(0); ///valor original

    const inc=()=>{setCount(prevCount=>prevCount +1);}
    const dec = ()=>{
        setCount(prevCount=>{ prevCount>0 ? setCount(prevCount-1): setCount(0)})
    }

    return (
        <div >
          <button onClick={inc}>+</button>  
          <h4>{count}</h4>
          <button onClick={dec}>-</button>  
        </div>
    )
}

export default Counter
