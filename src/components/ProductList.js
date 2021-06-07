import React from 'react'
import {Product} from './Product'


export function ProductList({produtos}) {
    return (       
        <>
        {produtos.map((item)=><Product key={item.id} produto={item} />)}
        </>
    )
}



/** COMPONENTE CONTAINER
 * 
 * PRODUCTLIST vai receber um lista de dados
 * por dentro de um PRODUTO
 * renderizar em uma ROW
 */
