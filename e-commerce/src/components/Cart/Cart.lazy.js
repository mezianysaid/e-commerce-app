import React, { lazy, Suspense } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTocart ,removeProductFromCart,DeleteProduct } from '../../Store/actions'
// import {getProductCart} from '../../Store/Selectors'
const LazyCart = lazy(() => import('./Cart'));

const Cart = () => {
  const [length,setLength] = useState(0);
  const cart=useSelector(state => state.cart);
  const {cartItems} =cart;
  const dispatch =useDispatch();
// console.log(cartItems)
  useEffect(()=> {
        setLength(cartItems.length);
  },[length,cartItems])
const qtychangehandler = (id,qty)=>{
  dispatch(addTocart(id,qty))
}

const getCartCount = () => {
  return cartItems.reduce((qty,item) => Number(item.qty) + qty,0)
}
const getTotatMoney = () => {
  return cartItems.reduce((price,item) => (item.price * item.qty) + price , 0 );
}
const resetProduct =() => {
  dispatch(DeleteProduct())
}
  let props={
    cartItems,length,
    qtychangehandler,    
    getCartCount,
    getTotatMoney,length,
    resetProduct
  }
  return (
    <Suspense fallback={<h1>loading the products ...</h1>}>
    <LazyCart {...props} />
  </Suspense>
  );
}
  

export default Cart;
