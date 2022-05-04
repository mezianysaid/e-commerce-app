import { CONTACT_US} from '../Constants/constants'

const ContactReducer = (state={},action) => {
   switch(action.type) {
       case CONTACT_US:
           return {
               ...state,
               contact:action.payload
           }
        default:
            return state;
   }
}

export default ContactReducer;