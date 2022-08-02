import React, { Component } from 'react'
import CartItem from './CartItem';

export default class Cart extends Component {
    constructor(){
        super() //used to called constructor of parent class
        this.state={
            products:[
            {
                price:999,
                title:'My Phone',
                Qty:10,
                img:'',
                id:1
            },
            {
                price:9999,
                title:'Mobile',
                Qty:21,
                img:'',
                id:2
            },
            {
                price:99999,
                title:'Laptop',
                Qty:3,
                img:'',
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
  render() {
    const{products}=this.state;
    return (
      <div className="cart">
        
        {products.map((product)=>{
            return <CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}  
                        onDeleteProduct={this.handleDeleteProduct}  
                    />
        })}
      </div>
    );
  }
}
