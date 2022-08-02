import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super() //used to called constructor of parent class
    this.state={
        products:[
        {
            price:999,
            title:'My Phone',
            Qty:10,
            img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:1
        },
        {
            price:9999,
            title:'Watch',
            Qty:21,
            img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:2
        },
        {
            price:99999,
            title:'Laptop',
            Qty:3,
            img:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id:3
        }
        ]
}};
handleIncreaseQuantity=((product)=>{
    console.log('increase');
    const{products}=this.state;
    const index=products.indexOf(product);
    products[index].Qty +=1;
    this.setState({
        products:products
    })
})
handleDecreaseQuantity=((product)=>{
    console.log('increase');
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].Qty>0){
        products[index].Qty -=1;
    }
    this.setState({
        products:products
    })
})
handleDeleteProduct=((id)=>{
    const {products}=this.state;
    const items=products.filter((items)=>items.id!==id);
    this.setState({
        products:items
    })
})
cartCount=()=> {

  const{products}=this.state;
  let count=0;
  
  products.forEach((product)=>{
    count += product.Qty;
  })
  
  return count;
}

getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.forEach((product)=>{
    cartTotal += product.Qty*product.price;
  })

  return cartTotal;
}
  render(){
    const{ products }=this.state;
    return (
      <div className="App">
          <Navbar count={this.cartCount()}/>
          <Cart 
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}  
            onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={{padding:'20px', fontSize:'20px' ,fontWeight:'600'}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}
  

export default App;
