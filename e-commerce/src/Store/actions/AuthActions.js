import * as actionTypes from '../Constants/constants'
import axios from  'axios';
import { setMessage } from './MessageActions'
// check token and load user 
export const loadUser = () => (dispatch,getState) => {
  dispatch({type:actionTypes.USER_LOADING});
//   const token = getState().auth.token;

  axios.get(actionTypes.API_URL + actionTypes.AUTH_PRIFIX + '/user',tokenConfig(getState))
  .then(res => dispatch({ 
      type:actionTypes.USER_LOADED,
      payload:res.data
  }))
  .catch(error => {
      dispatch(setMessage(error.response.data,error.response.status))
      dispatch({ type:actionTypes.AUTH_ERROR})
  })
}
export const register = ({username,email, password}) => {
   return async (dispatch) => {
       // Headers 
       const config ={ 
           headers: {
               'Content-type': 'application/json'
           }
       }
       const body = JSON.stringify({ username,email, password});
        axios.post(actionTypes.API_URL + actionTypes.AUTH_PRIFIX + '/register',body,config)
           .then(res => {
                        dispatch({
                            type:actionTypes.REGISTER_SUCCESS,
                            payload:res.data
                        });
                        dispatch({
                            type:actionTypes.SET_MESSAGE,
                            payload:res.data.msg
                        })                        
                 })
            .catch(err => {
                dispatch(setMessage(err.response.data,err.response.status,'REGISTER_FAIL'));
                dispatch({ type:actionTypes.REGISTER_FAIL})
            });           
   }
}

// LOGIN ACTION 

export const login = ({email, password}) => {
    return async (dispatch) => {
          // Headers
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
        
          // Request body
          const body = JSON.stringify({ email, password });
        
            axios.post(actionTypes.API_URL + actionTypes.AUTH_PRIFIX + '/login',body,config)            
            .then((res) => {
                         dispatch({
                             type:actionTypes.LOGIN_SUCCESS,
                             payload:res.data
                         });                                                
                  })
            .catch(err => {
                    dispatch(setMessage(err.response.data,err.response.status,'LOGIN_FAIL'));
                    dispatch({ type:actionTypes.LOGIN_FAIL})
                }); 
         
            
 }
};

 // LOGOUT ACTION

export const Logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('user');
        dispatch({
            type:actionTypes.LOGOUT
        })
    }
}


// Setup config/headers and token
export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().user.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };