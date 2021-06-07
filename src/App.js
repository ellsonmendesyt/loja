import React from 'react';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';

import {ProductList} from './components/ProductList'
import Container from './components/Container'
import Row from './components/Row'
import Navbar from './components/Navbar'
import CartContext from './contexts/CartContext';
import Cart from './components/Cart';


function App() {         


  ///PRODUTOS A SEREM VENDIDOS
  const [produtos,]=React.useState([
   {id:1,nome:'Playstation 5',img:'ps4.jpg',desc:'Video game top de linha da sony', preco: 3500.00, q:0,inCart:false},
   {id:2,nome:'Macbooks Pro',img:'ps4.jpg',desc:'Excelente para trabalhos hard work', preco: 7400.00, q:0,inCart:false},
   {id:3,nome:'xiaomi',img:'ps4.jpg',desc:'O melhor custo beneficio do mercado', preco: 1200.00, q:0,inCart:false},
  ]);

  const [cart,setCart]=React.useState([]);
  const [num,setNum]=React.useState(cart.length)


  const addToCart = (produto,cart)=>{
    const produtoAtual=produto;
      for(let i=0; i<cart.length;i++){
        if(cart[i].id === produtoAtual.id){
          const newCart = cart.filter(produto=>produto.id !==produtoAtual.id);
          produtoAtual.q +=1;
          setNum(num+1);
          
          return setCart([...newCart,produtoAtual])
        }
      }
    produto.q +=1;
    setNum(num+1);
    return setCart([...cart,produtoAtual])
  }


 







  const tirarDoCarrinho=(produto,cart)=>{
    const produtoAtual=produto;
    produto.q=0;
    setNum(num-1)
    const newCart =cart.filter(produto=>produto.id !==produtoAtual.id)
    return setCart(newCart);
    
  }


  const calcularTotal= (cart)=>{
    let total = 0;
    let num = 1;
    for(let i=0;i<cart.length;i++){
      num += i * cart[i].q;
      total+= cart[i].preco * cart[i].q;
    }
    return total;
  }


  const reduzirQuantidade=(produto,cart)=>{
    const produtoAtual=produto;
   for(let i=0;i<cart.length;i++){
     if(cart[i].id===produtoAtual.id ){
       if(cart[i].q >1){
         cart[i].q -= 1; 
       }else{
         tirarDoCarrinho(produtoAtual,cart)
       }   
     }
   }
  }

  const aumentarQuantidade=(produto,cart)=>{
    const produtoAtual=produto;
   for(let i=0;i<cart.length;i++){
     if(cart[i].id===produtoAtual.id ){
         cart[i].q += 1;  
     }
   }
  }




  return (
    <>
    <Router>
    <CartContext.Provider  value={{ addToCart,tirarDoCarrinho,calcularTotal,reduzirQuantidade,aumentarQuantidade,setNum,cart,num }}>
     <Navbar/>
      <Switch>
      <Container>
            <Row>         
              <Route path='/' exact render={()=> <ProductList  produtos={produtos}/>} />
              
              <Route path='/cart' component={Cart} />
            
            </Row>
          </Container>
      </Switch>
      </CartContext.Provider>
    </Router>
    
  </>
  );
}

export default App;
