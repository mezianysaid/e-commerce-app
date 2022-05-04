import {ADD_COMMENT,FETCH_COMMENTS,API_URL,USER_PRIFIX} from '../Constants/constants'
import axios from 'axios'
import { tokenConfig } from './AuthActions'
import { setMessage } from './MessageActions'

// add comment 
export const addComment = (id,comment) => {
 return async (dispatch,getState) => {
    const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };
    //   console.log(data);
    //   const {data}={id, comment }
     axios.post(API_URL + USER_PRIFIX + '/addcomment',{id,comment})
     .then((res) => {
         dispatch({
             type:ADD_COMMENT,
             payload:res.data
         })
     })
     .catch(error => {
         dispatch(setMessage(error.response.data,error.response.status,'COMMENT_FAIL'))
     })
 }
}

// fetch all comments from api 
export const ListComments = () => {
      return async (dispatch) => {
          await axios.get(API_URL + USER_PRIFIX + '/listComment')
          .then(res => {
              dispatch({
                  type:FETCH_COMMENTS,
                  payload:res.data
              })
        })
        .catch(error => {
            dispatch(setMessage(error.response.data.error.response.status,'COMMENT_FAIL'));
        })
      }
}