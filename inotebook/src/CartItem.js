import React, { Component } from 'react'

export default class CartItem extends Component {
    constructor(){
        super() //used to called constructor of parent class
        this.state={
            price:999,
            title:'My Phone',
            Qty:1,
            img:''
        }
        this.testing()
    }
    testing(){
        const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done');
            },5000);
        })
        promise.then(()=>{
            this.setState({Qty:this.state.Qty+10});
            this.setState({Qty:this.state.Qty+10});
            this.setState({Qty:this.state.Qty+10});
            console.log('state',this.state);
        });
    }
    //this.increaseQuantity=this.increaseQuantity.bind(this);
    increaseQuantity=()=>{
        //console.log(this.state);

        //setState form 1 ---- use when we do not required prevState
        /*this.setState({
            Qty:this.state.Qty+1
        });*/
        
        //React perform batching 

        //setState form 2 ---use when prevState is required
        //setState call is asynchronous
        
        this.setState((prevState)=>{
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
    }
  render() {
    const{price ,title ,Qty}=this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
            <img style={style.image} alt=""/>
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
                onClick={this.increaseQuantity}    
                />
                
            <img 
                alt="decrease" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                onClick={this.decreaseQuantity}
                />
                
            <img 
                alt="delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/484/484611.png" />
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

