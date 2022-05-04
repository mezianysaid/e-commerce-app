import * as actionTypes from  '../Constants/constants'

// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { isLoggedIn: true, user} : { isLoggedIn : false,user:null};
const IinitialState ={ 
    token:localStorage.getItem("token"),
    isAuthenticated:null,
    isLoading:false,
    user:null
}
const AuthReducer = (state= IinitialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOADING:
            return {
                ...state,
                isLoading:true
            }        
        case actionTypes.USER_LOADED:
                return {
                    ...state,
                    isAuthenticated:true,
                    isLoading:false, 
                    user:action.payload
                }
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:
            localStorage.setItem("token",action.payload.token)
           return {
               ...state,
               ...action.payload,
               isAuthenticated:true,
               isLoading:false   
           }
        case actionTypes.AUTH_ERROR:
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
        case actionTypes.LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                user:null,
                isLoading:false
            }           
        default:
            return state;
    }
}

export default AuthReducer;