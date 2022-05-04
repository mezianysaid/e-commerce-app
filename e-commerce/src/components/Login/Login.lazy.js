import React, { lazy, Suspense,useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login} from '../../Store/actions'
const LazyLogin = lazy(() => import('./Login'));

const Login = () => {
  const dispatch = useDispatch();
  const initValues={email:'',password:''}
  const [formValues, setFormValues]=useState(initValues)
  const [err, setError]=useState(null)
  const message = useSelector(state => state.message);
  const {msg ,id} = message;
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({ ...formValues,[name]:value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if(formValues){
     dispatch(login(formValues))
     setFormValues(initValues)
    }
  }
  
  useEffect(()=>{
    if(id==='LOGIN_FAIL'){
      setError(msg.msg)
      console.log(err)
    }else { setError(null)}
  },[id])
  let props={
    handleSubmit,handleChange,formValues,err
  }
  return (
  <Suspense fallback={null}>
    <LazyLogin {...props} />
  </Suspense>
);
  }
export default Login;
