import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import reducer from "./Reducers";

let middlewares = [thunk];

const middleware = applyMiddleware(...middlewares);
const cartFromLocal=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const initstate ={
    cart:{
        cartItems:cartFromLocal
    }
}
export default createStore(reducer, initstate,composeWithDevTools(middleware));