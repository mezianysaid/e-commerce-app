import React, { lazy, Suspense } from 'react';
import { useState,useRef,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js'
import  draftToHtml from 'draftjs-to-html'
import { addComment,ListComments} from '../../Store/actions'
const LazyComments = lazy(() => import('./Comments'));

const Comments = () => {
  const [comment, setComment ] = useState(null);
  const state = EditorState.createEmpty();
  const [editstate,setEditorState] = useState(state)
  const Comments = useSelector(state => state.comments)
  const { comments} =Comments; 
  const User = useSelector(state => state.user) 
  const {user} =User;
  const dispatch = useDispatch();
  // conet { }
  useEffect(() => {
    dispatch(ListComments());
  },[dispatch]);

  const onchangeHandler =(e) => {    
    // setEditorState(editstate)
    const {name,value}=e.target;
    setComment(value)
  }
  const onSubmitHandler= (e) => {
        e.preventDefault();
        // console.log(draftToHtml(convertToRaw(editstate.getCurrentContent())));
        // const data=new FormData();
        // data.append('id',user._id);
        // data.append('comment',draftToHtml(convertToRaw(editstate.getCurrentContent())))
        // data.append('comment',comment)
        // console.log(data.get('id'));      
        if(comment){
          dispatch(addComment(user._id,comment))
          .then(setEditorState(state))
        }
  }

  let props={
  onchangeHandler,onSubmitHandler
    ,editstate,comment,comments
  }
  return (
  <Suspense fallback={null}>
    <LazyComments {...props} />
  </Suspense>
    
    )
}  

export default Comments;
