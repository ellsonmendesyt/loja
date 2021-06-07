import React from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../contexts/CartContext';



export default function CartCount({link,qty}) {
   const loja = React.useContext(CartContext);
   const [q,setQ]=React.useState(loja.num);
   React.useEffect(()=>{
     setQ(loja.num);
   },[loja.num]);

    return (
        <li className="nav-item">
        <Link className='nav-link' to={link}>
            <i className="fa fa-shopping-cart " aria-hidden="true">
            </i><span className="ml-1 badge badge-light">{loja.num}</span></Link>
        
        
        </li>
    )
}






