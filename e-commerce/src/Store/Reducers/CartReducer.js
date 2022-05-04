// import { Switch } from '@mui/material';
import * as actionTypes from '../Constants/constants';

const  cartReducer = (state ={ cartItems: []},action)=>{
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existincart = state.cartItems.find((x) => x.id === item.id)
            if(existincart){ 
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.id === existincart.id ? item : x)
                }
            }else {
            return {
                ...state,
                cartItems:[...state.cartItems, item]
                }
            }           
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter((x) => x.id !== action.payload)
            } 
        case actionTypes.SAVE_QTTY_NUMBER_TOTAL:
            return {
                ...state,
                productInfo:[action.payload]
            }
        default:
            return state;
 }
}

export default cartReducer