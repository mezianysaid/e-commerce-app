import React from 'react';
import PropTypes from 'prop-types';
import './Register.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle, Divider, InputLabel } from '@mui/material';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Register = ({ handleChange,ValidateFields,cancelForm,
  handleSubmit,Roles,hide,errors,formValues,isAuthenticated,msg}) => (
  <div className="Register" data-testid="Register">
    <Box >
          <Typography id="modal-modal-title" component="div" >
           <Typography className='text-center' variant='h3' color="text.lighted">Register</Typography>
               <Divider/><br/>
               {/* <Suspense fallback={errors}> */}
               {hide && <Alert severity='error'><AlertTitle>Error:</AlertTitle>
               {errors}
               </Alert>}
               {/* <div  style={hide ? {} : { display: 'none'}} className="alert alert-danger">{errors}</div> */}
               {/* </Suspense> */}
               <ValidatorForm autoComplete="on"  onSubmit={handleSubmit} className='card'>              
                    <TextValidator  type='text' 
                       variant='filled' id="filled-basic" 
                       placeholder='Username'                  
                       name='username'          
                       label="Username :"
                       validators={['required']}  
                       className="col-12" 
                       errorMessages={['This is field is required']}
                       value={formValues.username} 
                       onChange={handleChange} 
                       
                       />   
                     
                       <br/> 
                 
                   <TextValidator variant="filled" id="filled-basic" className="col-12"
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
                
                   <TextValidator variant="filled" id="filled-basic"
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
                 
                   <TextValidator  variant="filled" id="filled-basic"
                     type='password'
                     placeholder='Confirm Password'
                     name='confirmPassword'
                     label='Confirm Password :'
                     validators={['required']}
                     errorMessages={['This is field is required']}
                     className="col-12" 
                     value={formValues.confirmPassword}
                     onChange={handleChange}
                    />
                 
                 <br/>
                                    
                    <InputLabel id='roles'>Role :</InputLabel>
                    <Select  variant='filled' label='Role' name='role' labelId='roles'  required  value={formValues.role}  onChange={handleChange}>                                                                                                  
                         
                           {Roles.map((name) => (
                             <MenuItem key={name} value={name}>{name}</MenuItem>
                           ))}
                       </Select>
                   {/* <span id="err1" className='errormessage'> ERRor:</span> */}
                 <div align="end" className='mr-3'>
                   <Button type='reset' onClick={cancelForm} color="error" className='mr-2' variant="contained" startIcon={<CancelIcon/>} >Cancel</Button> 
                   <Button type="submit" color="primary"  variant="contained" startIcon={<SaveIcon/>} >Save</Button> 
                 </div>
                  
                </ValidatorForm>                            
          </Typography>
        </Box>
      
  </div>
);

Register.propTypes = {
  isAuthenticated:PropTypes.bool,
  msg:PropTypes.object.isRequired
};

Register.defaultProps = {};

export default Register;
