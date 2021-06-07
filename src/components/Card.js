import React from 'react'

import Button from './Button'

import CartContext from '../contexts/CartContext';

export default function Card({produto}) {
   
  const {nome,img,preco}=produto;
  const loja = React.useContext(CartContext);
 

    return (
      

    //    <>
       
    //     {console.log(typeof loja.cart)}
    //     </>
    
        <div className="card  bd-dark" style={{ minWidth:'200px',maxWidth:'15rem' }}>
       
        <img src={`${process.env.PUBLIC_URL}/assets/imgs/${img}`} alt="imagem"  className='card-img-top'/>
        <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">R$ {preco}</p>
            <button className='btn btn-primary' onClick={()=>{loja.addToCart(produto,loja.cart)}}>adicionar</button>
        </div>
        </div>
       
    )
}


