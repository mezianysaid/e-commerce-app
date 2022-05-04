import {SET_MESSAGE,CLEAR_MESSAGE } from '../Constants/constants'


export const setMessage = (msg,status,id=null) => {
    return async (dispatch) => {
            dispatch({
                       type:SET_MESSAGE,
                       payload:{msg,status,id}
                   })               
    }
}

export const clearMessage = () => {
    return async (dispatch) => {
        dispatch({
                   type:CLEAR_MESSAGE                  
               })               
}
}