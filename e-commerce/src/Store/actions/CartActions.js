import * as actionTypes from '../Constants/constants'
import axios from 'axios'

const Api_url = process.env.REACT_APP_SERVER_URL
const product_prifix='/api/product'

export const addTocart = (id,qty) => async ( dispatch,getState) => {
    const { data } =await axios.get(Api_url + product_prifix + '/fetchdetails/'+id)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id:data._id,
            name:data.name,
            price:data.price,
            oldPrice:data.oldPrice,
            category:data.category,
            description:data.description,
            image:data.image,
            qtty:data.qtty,
            qty
        }
    })
    localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
}

export const removeProductFromCart = (itemId) => {
    return async (dispatch,getState) => {
            dispatch({
                       type:actionTypes.REMOVE_FROM_CART,
                       payload:itemId
                   })            

    localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
    }
}

export const saveQttyNumber = (qtty,numberTotal) => async ( dispatch,getState) => {
    const { data } = {qtty,numberTotal}
    dispatch({
        type: actionTypes.SAVE_QTTY_NUMBER_TOTAL,
        payload: {
            qtty_total:qtty,
            number_total:numberTotal
        }
    })
    localStorage.setItem("productInfo",JSON.stringify(getState().cart.productInfo));
}
