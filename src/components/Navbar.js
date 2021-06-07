import React from 'react';
import CartContext from '../contexts/CartContext'
import CartCount from './CartCount'
import {Link} from 'react-router-dom';

export default function Navbar() {


    const loja = React.useContext(CartContext);

    React.useEffect(()=>{
        console.log('mudou');
    },[loja.num]);


    return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">Shop</Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#servicos" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>



            <div className="collapse navbar-collapse" id="servicos">
                <ul className="navbar-nav ml-auto">
              
                {/* <li className="nav-item"><Link className='nav-link' to='/cart'><i className="fa fa-shopping-cart " aria-hidden="true"></i><span className="ml-1 badge badge-light">{loja.cartAmount}</span></Link></li> */}
                
                <CartCount link='/cart' qty={loja.num}/>
                <li className="nav-item"><Link className='nav-link' to='/cart'><i className="fa fa-user-circle " aria-hidden="true"></i></Link></li>
                </ul>

                                                                                    
              
            </div>
        </nav>
        
    )
}


