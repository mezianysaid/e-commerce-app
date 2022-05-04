import React, { lazy, Suspense, useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { ADDProduct } from '../../Store/actions';
const LazyAddProduct = lazy(() => import('./AddProduct'));


const AddProduct = () => {
      const dispatch = useDispatch();
      const initialFields = { 
              name:'',
              price:'',
              oldPrice:'',
              category:'',
              qtty:'',
              description:'',
      }
  const [data, setData] = useState(initialFields) ;
  const [file, setFile] = useState(null) ;
  const navigate= useNavigate()
  const handleChange = (e) => {
    e.preventDefault();
    const {name,value} = e.target;
    setData({...data,[name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData() ;
    formdata.append('name',data.name)
    formdata.append('price',data.price)
    formdata.append('oldPrice',data.oldPrice)
    formdata.append('category',data.category)
    formdata.append('qtty',data.qtty)
    formdata.append('description',data.description)
    formdata.append('image',file)
    // console.log(data)
    // console.log(formdata.get('image'))
    dispatch(ADDProduct(formdata))
    .then(setData(initialFields))
    .then(setFile())
    .then(navigate('/'))
  }
  const handleCancel = (e) =>{
    e.preventDefault()
    setData(initialFields)
  }
  useEffect(() => {

  },[data])
  const listOptions=['men','women','phones','cars','laptops'];
  let props = {
    data,
    handleSubmit,
    handleChange,
    file,
    setFile,
    handleCancel,
    listOptions
  }
  return (
    <Suspense fallback={null}>
    <LazyAddProduct {...props} />
  </Suspense>
  );
}
 

export default AddProduct;
