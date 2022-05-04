import { ADD_COMMENT,FETCH_COMMENTS } from '../Constants/constants'

//  Comments's reducers 

const CommentReducer = (state={},action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                data:action.payload
            }
        case FETCH_COMMENTS:
            return {
                ...state,
                comments:action.payload
            }            
        default:
            return state;
    }
  
}

export default CommentReducer;