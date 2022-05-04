import React from 'react';
import PropTypes from 'prop-types';
import './Comments.scss';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import { Avatar, Button, Card, Container, Divider, FormControl, Input, InputLabel, TextareaAutosize, Typography } from '@mui/material'
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { draftToHtml } from 'draftjs-to-html'
// import DOMPurify from 'dompurify'
// import {editorState } from 'draft-js'
import { EditorState, convertToRaw } from 'draft-js'
import  draftToHtml from 'draftjs-to-html'
const Comments = ({comment,comments,onSubmitHandler,onchangeHandler,
  editstate}) => (
  <div className="Comments" data-testid="Comments">    
    <h3 align='center'>your community :</h3>
    {/* <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editstate.getCurrentContent()))}} /> */}
    <Box>
      {comments.map((item) => (
        
      <Card className='mt-2' sx={{borderLeft:'2px solid gray'}}>
         <Typography sx={{display:'flex',flexDirection:'row'}}> <Avatar/> <Box className='text-secondary mt-3'>{item.user.username} {item.createdAt}</Box></Typography>
         <Divider/>
         <Box style={{marginLeft:4}}>{item.comment}</Box>
      </Card>
      
      ))}
    </Box>
    {/* form for add new comment */}
    <Container>      
    <div className='row'>
    <div className='col-12'>
       <ValidatorForm onSubmit={onSubmitHandler}>        
       {/* <Editor
       editorState={editstate}
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: 700, border: "1px solid grey" }}
         placeholder="please type here ..."
        
         label='comment'       
         name='comment'
         */}
         {/* onEditorStateChange={onchangeHandler} */}
         
      {/* /> */}
      <TextareaAutosize
      className='col-12'
      minRows={6}
       label='comment' name='comment' value={comment} onChange={onchangeHandler}
      />
         <Button variant='contained' className='align-self-end' type='submit' startIcon={<SaveIcon/>}>Save</Button>
       </ValidatorForm>
       
    </div>
    </div>
    </Container>
  </div>
);

Comments.propTypes = {
  comment:PropTypes.string.isRequired,
  onchangeHandler:PropTypes.func.isRequired,
  onSubmitHandler:PropTypes.func.isRequired
};

Comments.defaultProps = {
  comment:PropTypes.string.isRequired,
  onchangeHandler:PropTypes.func.isRequired,
  onSubmitHandler:PropTypes.func.isRequired
};

export default Comments;
