import React from 'react'
import Col from './Col'
import Card from './Card'




export function Product({produto}) {
  


    return (  
        <Col>
        <Card produto={produto} />
        </Col>
    )
}

/**
 * Produto é um coluna com um Cartão
*/

