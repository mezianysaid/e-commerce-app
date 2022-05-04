import * as actionTypes from '../Constants/constants'
// const initialProduct = {
//     products:[]
// }
const product={}

export const getProductReducer = (state= { products:[]}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_REQUEST:
            return {
                loading:true,
                products:[]
            }
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {
                loading:false,
                products:action.payload
            }
        case actionTypes.GET_PRODUCT_FAIL:
            return {
                    loading:false,
                    error:action.payload
                }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading:false,
                product:action.payload
            }
        case actionTypes.INCREMENTlIKES:
            return {
                ...state,
                product:action.payload
            }
        case actionTypes.COUNT_VISITORS:
            return {
                ...state,
                data:action.payload
            }
        case actionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                msg:action.payload
            }      
        default:
                return state;
        }
}
       
               
 
// export default getProductReducer
export const getProductDetailsReducer =(state ={ product:[]}, action) =>{
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading:true,               
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading:false,
                product:action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                    loading:false,
                    error:action.payload
                }           
                
        case actionTypes.GET_DETAILS_RESET:
            return {
                    product:{}
                }           
            default:
                return state;
        }
}