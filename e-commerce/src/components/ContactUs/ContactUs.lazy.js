import React, { lazy, Suspense,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../Store/actions'
const LazyContactUs = lazy(() => import('./ContactUs'));

const ContactUs = () => {
  const initValues={ fullname:'',email:'',message:''}
  const [data,setData]=useState(initValues);
  const [msg, setMessage]=useState(null)
  const [open,setOpen] =useState(false)
  const dispatch = useDispatch();
  const Contact =useSelector(state => state.contact)
  const { contact} =Contact;
  const handleChange = (e) => {
        const { name, value} = e.target;
        setData({...data,[name]:value});
  }
  const handleAlert = (newstate) => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return;
    }
    setOpen(false)
  }
  const handleSubmit=(e) => {
    e.preventDefault()
    if(data){      
      dispatch(contactUs(data))
      .then(() => {
        setMessage(contact.message)
        setData(initValues)
        handleAlert()
      })
    }
  }
let props = {
  msg,data,open,
  handleAlert,handleSubmit,handleClose,handleChange,
  
}
  return (  
  <Suspense fallback={null}>
    <LazyContactUs {...props} />
  </Suspense>
)};

export default ContactUs;
