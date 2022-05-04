import React, { lazy, Suspense, useEffect, useState,useContext, createContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ProductDetails } from '../../Store/actions';
import  {getDetails}  from '../../Store/Selectors';
// import { ListProducts } from '../../Store/Selectors';
import { FetchPoducts } from '../../Store/actions'
import { AddSimilarImages,IncrementLikes,addTocart,RemoveProduct } from '../../Store/actions'
const LazyProductInfo = lazy(() => import('./ProductInfo'));
export  const infoContext=createContext(null);
const ProductInfo = () => {
  const par = useParams();
  const _id = par.id
  const dispatch = useDispatch();
  // const pro = useSelector(state => state.productDetails);
  // const { product,loading } = pro;

  const [image,setImage]=useState()
  const [qty,setQty]=useState(1)
  const [show, setShow] =useState(false);
  const [file, setFile] =useState(null);
  const [disable, setDisable] = useState(false)
  const [hide,setHide] = useState(false)
  const [prod,setProduct ] =useState(null);
  
  const navigate =useNavigate();
  const produc = useSelector(state => state.productDetails);
  const { product ,loading,error } = produc;
  const getproducts = useSelector(state => state.products)

  const { products} =getproducts;

  const handlechange =(e) => {
    const { name, value } =e.target;
    setQty(value)
  }
useEffect(() => {
    // if(product && _id === product._id
  dispatch(ProductDetails(par.id))
},[dispatch,par.id]);
// useMemo(() => {
  
  // handleLikes();
  // dispatch(ProductDetails(par.id))
// },[dispatch])
useEffect(() => {
  dispatch(FetchPoducts()) 
},[dispatch])
  const removeProductHandler = () => {
    dispatch(RemoveProduct(par.id))
    .then(navigate('/'))
  }
  const handleLikes = (e) => {
       e.preventDefault();
       e.target.style.color = "red"
       dispatch(IncrementLikes(_id))
       setDisable(true)
       dispatch(ProductDetails(par.id));
  }
  const handleAddToCard = (e) =>{
      e.preventDefault()
      dispatch(addTocart(_id,qty))
      navigate('/shopcart')
  }
  const handleImage =(e) => {
    const {name,value}=e.target
    setImage(value)
  }
  const handleAddImages =(e) => {
    e.preventDefault()
    if(show) setShow(false)
    else setShow(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   const  data= new FormData();
    data.append('image',file)
    data.append('id',_id)
    dispatch(AddSimilarImages(data))
    .then(setFile(null))
    .then(setShow(false))

  }
  let props = { 
    product,  
    products,
    show,disable,hide,qty,setQty,
    handleLikes ,handleAddToCard,
    handleImage,image,
    handleAddImages,
    handleSubmit,setFile,handlechange,removeProductHandler
  }
  return (
   <Suspense fallback={<h2>the product is Loading .... </h2>}>
    <LazyProductInfo {...props}/>
  </Suspense>
  )
}
  

export default ProductInfo;
