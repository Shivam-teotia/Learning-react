//import { initializeApp } from 'firebase/app';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from  'firebase';
//import 'firebase/firestore';
//import {db} from './firebase-config';

class App extends React.Component {
  constructor(){
    super() //used to called constructor of parent class
    this.state={
        products:[
        /*{
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
        }*/
        ],
        loading:true
    }
    this.db=firebase.firestore();
};

componentDidMount(){
  /*firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
        console.log(snapshot);

        //snapshot.docs.map((doc)=>{
          //console.log(doc.data());
        //});

        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        })

        this.setState({
          products:products,
          loading:false
        })
    })*/
    firebase
      .firestore()
      .collection('products')
      //.where('price','>=',1999)       //return products with price greater than or equal to 1999
      //.where('title','===','Watch')   //return products whose title is exactly is equal to Watch
      .orderBy('price','desc')          //return products in descending order of price if we use asc then it will return in incresing order of price
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data);
        });
        const products=snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id']=doc.id;
          return data;
        });

        this.setState({
          products,
          loading:false
        })
      })
}
handleIncreaseQuantity=((product)=>{
    console.log('increase');
    const{products}=this.state;
    const index=products.indexOf(product);
    /*products[index].Qty +=1;
    this.setState({
        products:products
    })*/
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        Qty:products[index].Qty+1
      })
      .then(()=>{
        console.log('updated sucesfully')
      })
      .catch((error)=>{
        console.log('error in updating',error);
      })
})
handleDecreaseQuantity=((product)=>{
    console.log('increase');
    const{products}=this.state;
    const index=products.indexOf(product);
    /*if(products[index].Qty>0){
        products[index].Qty -=1;
    }
    this.setState({
        products:products
    })*/

    if(products[index].Qty>0){
      const docRef=this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        Qty:products[index].Qty-1
      })
      .then(()=>{
        console.log('updated sucesfully')
      })
      .catch((error)=>{
        console.log('error in updating',error);
      })
    }
})
handleDeleteProduct=((id)=>{
    const {products}=this.state;
    const items=products.filter((items)=>items.id!==id);
    this.setState({
        products:items
    })
    const docRef=this.db.collection('products').doc(id);
    docRef.delete()
    .then(()=>{
      console.log('deleted successfully');
    })
    .catch((error)=>{
      console.log('Error',error);
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
addProduct=()=>{
    this.db
      .collection('products')
      .add({
        img:'',
        price:9990,
        Qty:15,
        title:'Washing Machine'
      })
      .then((docRef)=>{
          console.log('product has been added ', docRef);
      })
      .catch((error)=>{
        console.log('Error :', error);
      })
}
  render(){
    const{ products,loading }=this.state;
    return (
      <div className="App">
          <Navbar count={this.cartCount()}/>
          <button onClick={this.addProduct} style={{padding:20 ,fontSize:20 ,margin:5, borderRadius:10}}>Add a Product</button>
          <Cart 
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}  
            onDeleteProduct={this.handleDeleteProduct}
          />
          {loading && <h1>loading products.....</h1>}
          <div style={{padding:'20px', fontSize:'20px' ,fontWeight:'600'}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}
  

export default App;
