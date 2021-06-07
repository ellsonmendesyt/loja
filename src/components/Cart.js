import React from 'react'
import CartContext from '../contexts/CartContext';


export default function Cart() {




    const loja = React.useContext(CartContext);
    const [aperto,setApertos]=React.useState(0);

    React.useEffect(()=>{},[aperto])


    return (
        <>
        <div className='col-10 mx col-md-6'>
            {
                loja.cart && loja.cart.map((produto)=>{
                    return(
                        <div key={produto.id} className='alert alert-info'>
                            <h5 className='mb-0'>{produto.nome}</h5>
                            <p className='mb-0'>R$ {produto.preco}</p>
                            <p className='text-muted mb-1'>qde: {produto.q}</p>
                            {console.log(parseInt(produto.q))}
                            <button className='btn btn-danger' onClick={()=>{loja.tirarDoCarrinho(produto,loja.cart)}}>Remover</button>
                            <button className='ml-1 btn btn-primary btn-sm' onClick={()=>{
                                loja.reduzirQuantidade(produto,loja.cart);setApertos(aperto+1);}}>-</button>

                            <button className='ml-1 btn btn-primary btn-sm' onClick={()=>{
                                loja.aumentarQuantidade(produto,loja.cart);setApertos(aperto+1);}}>+</button>
                        </div>
                    )
                })
            }
        </div>
        <div className='alert alert-success fixed-bottom mb-0 text-right'>Total: {loja.calcularTotal(loja.cart)}</div>
        </>
    )
}


