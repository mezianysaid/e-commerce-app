import React, { lazy, Suspense, useState } from 'react';
import { useDispatch } from 'react-redux'
import { countVisitors } from '../../Store/actions'
const LazyProduct = lazy(() => import('./Product'));

const Product = props => {
  // console.log("from prod",props.product)
  const dispatch = useDispatch()

  const product=props.product
  const _id =product._id
  const [value, setValue]=useState(1)

  const incrementVisitors = () => {
    dispatch(countVisitors(_id))
  }
  let prop={
    product,
    value,setValue,
    incrementVisitors
  }
  return (
  <Suspense fallback={null}>
    <LazyProduct {...prop} />
  </Suspense>
  )
};

export default Product;
