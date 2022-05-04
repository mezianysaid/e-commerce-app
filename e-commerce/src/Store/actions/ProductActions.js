import axios from 'axios'
import * as actionTypes from '../Constants/constants'
import { setMessage } from './MessageActions'
import { tokenConfig} from '../actions/AuthActions'
const Api_url = process.env.REACT_APP_SERVER_URL
const product_prifix='/api/product'
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const PRODUCT_DETAILS = 'PRODUCT_DETAILS';
const ADDSIMILARIMAGES = 'ADDSIMILARIMAGES'
const INCREMENTlIKES = 'INCREMENTlIKES';
const COUNT_VISITORS = 'COUNT_VISITORS'
const REJECTION_PRODUCT = 'REJECTION_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QTY = 'ADJUST_QTY'
const LIST_PRODUCTS_CART = 'LIST_PRODUCTS_CART'
// const GET_REQUEST = 'GET_REQUEST'
// const GET_SUCCESS = 'GET_SUCCESS'
// const GET_FAIL = 'GET_FAIL'
// const GET_RESET = 'GET_RESET'
export const FetchPoducts = () => {
    return async (dispatch) => {
           try {
            dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });
            const { data } =await axios.get(Api_url + product_prifix + '/list');
            //  console.log(data)
            dispatch({
                     type:actionTypes.GET_PRODUCT_SUCCESS,
                     payload: data
                 })            
           } catch (error) {
               dispatch({
                   type:actionTypes.GET_PRODUCT_FAIL,
                   payload:error.response && error.response.data.message ? error.response.data.message: error.message 
               })
           }
    }
}
/// ADD NEW PRODUCT 

export const ADDProduct = (data) => {
    return async (dispatch,getState) => {
        try {            
        axios.post(Api_url+ product_prifix+'/add',data,tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        })
    } catch (error) {
        dispatch({ type:REJECTION_PRODUCT,
                   payload:error})
    }
  }
}

// UPDATE PRODUCT 

export const UpdateProduct = (data) => {
    return async (dispatch) => {
        try {
              axios.put(Api_url+ product_prifix+'/update',data)
              .then(res => {
                  dispatch({
                      type:UPDATE_PRODUCT,
                      payload: res.data
                  })
              })
        } catch (error) {
            dispatch({ type:REJECTION_PRODUCT,
                      payload:error})
        }
    }
}


// DELETE PRODUCT 

export const DeleteProduct = () => {
    return async (dispatch) => {        
                 dispatch({
                     type:actionTypes.GET_DETAILS_RESET,                    
                 })          
    }
}

//FETCH A PRODUCT BY ID 

export const ProductDetails = (_id) => {
   return async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
         axios.get(Api_url + product_prifix + '/fetchdetails/'+_id)
         .then((res) => {
            dispatch({
                type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
                payload: res.data
            })
         })
        //  console.log(data)
                    
       } catch (error) {
        dispatch(setMessage(error.response.data,error.response.status));
           dispatch({
               type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
               payload:error.response && error.response.data.message ? error.response.data.message: error.message 
           })
       }
    }
}

// ADD LIST OF NSIMILAR IMAGES 
export const AddSimilarImages = (data) => {
    return async (dispatch) => {
        try{
              axios.post(Api_url + product_prifix + '/addImages',data)
              .then((res) => {
                  dispatch({
                             type:ADDSIMILARIMAGES,
                             payload:res.data
                  })
              })
        }catch(error){ 
                    dispatch({ 
                                type:REJECTION_PRODUCT,payload:error
                    })
        }
    }
}

// ADD LIKES 
export const IncrementLikes = (id) => {
    return async (dispatch) => {
        try{
               axios.get(Api_url + product_prifix +'/incrementLikes/'+id)
               .then((res) => {
                   dispatch({
                       type:actionTypes.INCREMENTlIKES,
                       payload:res.data
                   })
               })
        }catch(error){
            dispatch({type:REJECTION_PRODUCT,payload:error})
        }
    }
}

// COUNT VISITORES


export const countVisitors = (id) => {
    return async (dispatch) => {
        try{
               axios.get(Api_url + product_prifix +'/countVisitors/'+id)
               .then((res) => {
                   dispatch({
                       type:actionTypes.COUNT_VISITORS,
                       payload:res.data
                   })
               })
        }catch(error){
            dispatch({type:REJECTION_PRODUCT,payload:error})
        }
    }
}

// REMOVE A PRODUCT  
export const RemoveProduct = (id) => {
    return async (dispatch,getState) => {
        axios.delete(actionTypes.API_URL + actionTypes.PRODUCT_PRIFIX + '/remove/'+id,tokenConfig(getState))
        .then((res) => {
            dispatch({
                type:actionTypes.REMOVE_PRODUCT,
                payload:res.data
            });            
            dispatch(setMessage(res.data,res.status));
        })
        .catch(error => {
            dispatch(setMessage(error.response.data,error.response.status));
        })
    }
}