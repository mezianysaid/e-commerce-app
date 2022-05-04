import * as actionTypes from '../Constants/constants';

const initialState ={ 
    msg:{},
    status:null,
    id:null
}
const  MessageReducer = (state =initialState,action)=>{
    switch(action.type) {
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                msg:action.payload.msg,
                status:action.payload.status,
                id:action.payload.id,
            }
        case actionTypes.CLEAR_MESSAGE:
            return {
                ...state,
                msg:{},
                status:null,
                id:null
            }
        default:
            return state;
    }
}
export default MessageReducer;
