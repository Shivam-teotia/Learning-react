import React, { Component } from 'react'

export default class CartItem extends Component {
    /*constructor(){
        super() //used to called constructor of parent class
        this.state={
            price:999,
            title:'My Phone',
            Qty:1,
            img:''
        }
    }*/
    //this.increaseQuantity=this.increaseQuantity.bind(this);
    //increaseQuantity=()=>{
        //console.log(this.state);

        //setState form 1 ---- use when we do not required prevState
        /*this.setState({
            Qty:this.state.Qty+1
        });*/
        
        //React perform batching 

        //setState form 2 ---use when prevState is required
        //setState call is asynchronous
        
        /*this.setState((prevState)=>{
            return {
                Qty:prevState.Qty+1
            }
        },()=>{});
    }
    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            if(prevState.Qty>0){
                return {
                    Qty:prevState.Qty-1
                }
            }
        });
    }*/
  render() {
    //const{price ,title ,Qty}=this.state;
    //console.log('this.props',this.props);
    const{price ,title ,Qty}=this.props.product;
    const{product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct}=this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
            <img style={style.image} src={product.img} alt=""/>
        </div>
        <div className="right-block">
            <div style={{fontSize:25,fontWeight:500}}>{title}</div>
            <div style={{fontSize:25,color:'grey'}}>{price}</div>
            <div style={{fontSize:25,color:'grey'}}>{Qty}:</div>

            <div className="cart-item-actions">
            {/*buttons*/}
            <img 
                alt="increase" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                onClick={(()=>{
                    onIncreaseQuantity(product)
                })}    
                />
                
            <img 
                alt="decrease" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                onClick={(()=>{
                    onDecreaseQuantity(product)
                })}
                />
                
            <img 
                alt="delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/484/484611.png" 
                onClick={()=>{
                    onDeleteProduct(product.id)
                }}    
                />
            </div>
        </div>
      </div>
    )
  }
}
const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'lightGrey'
    }
}

