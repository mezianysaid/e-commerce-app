import React, { lazy, Suspense,useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { register } from '../../Store/actions'
const LazyRegister = lazy(() => import('./Register'));

const Register = () => {
  const user = useSelector(state => state.user);
  const {isAuthenticated }= user
  const message = useSelector(state => state.message);
  const { msg } = message;
  const initValues={username:'',email:'',password:'',confirmPassword:'',role:''}
  const [formValues, setFormValues]=useState(initValues)
  const [errors, setErrors] =useState([])
  const [hide, sethide] =useState(false)
  const Roles=['USER','ADMIN']
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({ ...formValues,[name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    ValidateFields(formValues);
    if(formValues){
      // const data={
        // username:formValues.username,
        // email:formValues.email,
        // password:formValues.password,       
      // }
      const {username, email, password ,confirmPassword,role} = formValues
      const newUser ={username, email,password};
       dispatch(register(newUser))
      .then(setFormValues(initValues))
      // .then(navigate('/login'))
      // .catch((err)=>{console.log(err)})
    }
  }
  const cancelForm = (e) => {
    e.preventDefault() ;
    setFormValues(initValues);
  }
const ValidateFields= (values) => {
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username || values.username.length <=3){
          sethide(true)
          setErrors('username is mandatory and  must be atleast 3 characters !')
        }
        if(values.password.length<=3 && values.confirmPassword.length<=3){
          setErrors('password must be atleast 3 characters')
        }
        if(values.password != values.confirmPassword){
          setErrors('Passwords does not match !')
        }
        if(!regex.test(values.email)){
          setErrors('this is not a valid email format')
        }  

}
 let props ={
  handleChange,
  ValidateFields,
  cancelForm,
  handleSubmit,
  Roles,hide,errors,formValues,
  isAuthenticated,msg

 }
  return (
  <Suspense fallback={null}>
    <LazyRegister {...props} />
  </Suspense>
)
};

export default Register;
