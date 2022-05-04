import { CONTACT_US,SET_MESSAGE, EMAIL_PRIFIX,API_URL } from '../Constants/constants';
import axios from  'axios';
import { setMessage } from './MessageActions';

export const contactUs = (data) => {
  return async (dispatch) => {      
      axios.post(API_URL + EMAIL_PRIFIX + '/send',data)
      .then(res => {
          dispatch({
              type:CONTACT_US,
              payload:res.data
          })
        })
      .catch(err => {
        dispatch(setMessage(err.response.data,err.response.status))    
      })
      
  }
}