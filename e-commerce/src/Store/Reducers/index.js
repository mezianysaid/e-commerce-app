import { combineReducers } from "redux";
import {getProductReducer,getProductDetailsReducer} from './ProductReducers'
import  cartReducer  from './CartReducer'
import AuthReducer from "./AuthReducers";
import MessageReducer from "./MessageReducer";
import  ContactReducer  from "./ContactReducers";
import CommentReducer  from './CommentReducer'
const reducer = combineReducers({
    products:getProductReducer,
    cart:cartReducer,
    productDetails:getProductDetailsReducer,
    user:AuthReducer,
    message:MessageReducer,
    contact:ContactReducer,
    comments:CommentReducer
});


export default reducer;