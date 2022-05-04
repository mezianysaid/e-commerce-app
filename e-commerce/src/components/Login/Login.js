import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Container, Divider } from '@mui/material';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import LoginIcon from '@mui/icons-material/LoginRounded'
import { Card,Alert } from '@mui/material';
const Login = ({handleSubmit,handleChange,formValues,err}) => (
  <div className="Login" data-testid="Login">
   

    <Card elevation={10} className='col-8 mt-4 container'>
    {err ? ( <Alert color='error'>{err}</Alert>) : null}
          <Container className='mb-2'>
          <Typography id="modal-modal-title" component="div">

           {/* <div className='item-center mt-3' align="center"><Avatar src={require('../../images/bk2.png')} /></div> */}
           <Typography className='text-center' variant='h3' color="text.secondary">Login</Typography>
               <Divider/><br/>
               <ValidatorForm   onSubmit={handleSubmit} >              
                                                
                   <TextValidator variant="outlined" id="filled-basic" className="col-12"
                     type='email'
                     placeholder='E-mail'
                     name='email'        
                     label='E-mail :'
                     validators={['required']} 
                     errorMessages={['This is field is required']}           
                     value={formValues.email}
                     onChange={handleChange}
                    />
                
                 <br/>
                
                   <TextValidator variant="outlined" id="filled-basic"
                     type='password'
                     placeholder='Password' 
                     name='password'
                     validators={['required']}
                     errorMessages={['This is field is required']}
                     className='col-12'
                     label='Password :'
                     value={formValues.password}
                     onChange={handleChange}
                    />
                
                 <br/>
                                   
                 
                 <br/>
                                    
                
                 <div align="end" className='mr-3'>                  
                   <Button type="submit" color="primary"  variant="contained" startIcon={<LoginIcon/>} >Log in</Button> 
                 </div>
                  
                </ValidatorForm>                            
          </Typography>
          </Container>
        </Card>
      
  </div>
);

Login.propTypes = {
  err:PropTypes.bool
};

Login.defaultProps = {};

export default Login;
