import React from 'react';
import PropTypes from 'prop-types';
import './ContactUs.scss';
import { Card } from '@mui/material';
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import TextareaAutosize from '@mui/base/TextareaAutosize' 
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const ContactUs = ( {handleAlert,handleSubmit,handleClose,handleChange,
  msg,data,open}) => (
  <div className="ContactUs" data-testid="ContactUs">
    <Card>
    <Container>
      <Container align="end">
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      {msg ? (<Alert onClose={handleClose} severity="success" sx={{width:'100%'}}>
        {msg}
      </Alert>) : null }
    
    </Snackbar>
    </Container>
               <p className="display-4 text-center">Contact us</p>
               <Divider/><br/>
               <ValidatorForm   onSubmit={handleSubmit}>
              
                    <TextValidator  type='text' 
                       variant='outlined' id="filled-basic" 
                       placeholder='full name'                  
                       name='fullname'          
                       label="full Name"
                       validators={['required']}  
                       className="col-12" 
                       errorMessages={['This is field is required']}
                       value={data.fullname} 
                       onChange={handleChange} 
                       
                       />   <br/>
                         <TextValidator  type='email' 
                       variant='outlined' id="filled-basic" 
                       placeholder='your e-mail'                  
                       name='email'          
                       label="email"
                       validators={['required']}  
                       className="col-12" 
                       errorMessages={['This is field is required']}
                       value={data.email} 
                       onChange={handleChange}                        
                       />   <br/>
                     <TextareaAutosize 
                      //  mixRows={5}
                       variant='outlined' id="filled-basic" style={{minHeight:'70px'}} 
                       placeholder='your Message'                  
                       name='message'          
                       label="message"
                       validators={['required']}  
                       className="col-12" 
                       errorMessages={['This is field is required']}
                       value={data.message} 
                       onChange={handleChange} 
                       
                       />   <br/>
                      <Container align="end" className="mb-2">
                      <Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon/>}>Send</Button>
                      </Container>                      
                       </ValidatorForm>

                       </Container>
    </Card>
  </div>
);

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
