import React, { lazy, Suspense,useState,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addTocart,removeProductFromCart } from '../../Store/actions'
const LazyItemCart = lazy(() => import('./ItemCart'));

const ItemCart = ({product,getCartCount,getTotatMoney}) => {
  // const product=props.product
  // const qtychangehandler=props.qtychangehandler
  const [qty,setQty] = useState(product.qty);
  // const productscart=useSelector(getProductCart);
  const dispatch =useDispatch();
  const cart=useSelector(state => state.cart);
  const {cartItems} =cart;
  const qtychangehandler = (id,qty) => {    
    dispatch(addTocart(id,qty))
  }
  const removefromcart = (id) =>{
    dispatch(removeProductFromCart(id));
  }
  let prop={
    product,qty,
    qtychangehandler ,
    removefromcart ,qty,
    getCartCount,getTotatMoney
  }
  return (
  <Suspense fallback={null}>
    <LazyItemCart {...prop} />
  </Suspense>
)};

export default ItemCart;
