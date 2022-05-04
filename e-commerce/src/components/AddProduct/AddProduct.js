import React from 'react';
import PropTypes from 'prop-types';
import './AddProduct.scss';
import { Box, Button, Card,Container, Divider } from '@mui/material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddProduct = ({data, handleChange,handleSubmit,setFile,handleCancel,listOptions}) => (
  <div className="AddProduct" data-testid="AddProduct">
   <Container>
     <Card elevation={4}>
       <center className="display-6" >Add New Product</center>
       <Divider/>
       <Box className="m-4">
       <ValidatorForm onSubmit={handleSubmit} enctype="multipart/form-data">
        <TextValidator 
         label="Name"
         placeholder="watch"        
         name="name"
         className="col-12"
         value={data.name}
         validators={['required']}
         errorMessages={["this field is mandatory"]}
         onChange={handleChange}
        />

        <TextValidator 
         label="Price"
         placeholder='199$'
         className="col-12 mt-2"
        //  floatingLabelFocusStyle={{ color:'red'}}
         name="price"
         value={data.price}
         validators={['required']}
         errorMessages={["this field is mandatory"]}
         onChange={handleChange}
        />
        
        <TextValidator 
         label="Old Price"
         placeholder='199$'
         className="col-12 mt-2"        
         name="oldPrice"
         value={data.oldPrice}
         validators={['required']}
         errorMessages={["this field is mandatory"]}
         onChange={handleChange}
        />


       
        <Box sx={{ minWidth: 120 }} className='mt-2'>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.category}
          label="Category"
          name='category'
          onChange={handleChange}
        >
          {listOptions.map((item)=>(
               <MenuItem value={item}>{item}</MenuItem>
          ))}                   
        </Select>
      </FormControl>
      </Box>
      <TextValidator 
         label="Quantity in Stock"
         placeholder='199'
         className="col-12 mt-2"        
         name="qtty"
         value={data.qtty}
         validators={['required']}
         errorMessages={["this field is mandatory"]}
         onChange={handleChange}
        />

        <TextValidator 
         label="Description"
         placeholder='describe this product'
         className="col-12 mt-2"
         name="description"
         value={data.description}
         validators={['required']}
         errorMessages={["this field is mandatory"]}
         onChange={handleChange}
        />

        <input type='file' 
         className="col-12 mt-2"
         name="file"
         value={data.file}
        //  validators={['required']}
        //  errorMessages={["this field is mandatory"]}
         onChange={event=>{const file=event.target.files[0];
          setFile(file)}}

        />

        <Box className="mt-2 text-end" >
          <Button variant="contained" className="ml-2" color="primary" type="submit" startIcon={<SaveIcon/>}>Save</Button>
          <Button variant="contained" onClick={handleCancel} style={{background:"gray"}} type="reset" startIcon={<CancelIcon/>}>Cancel</Button>
        </Box>
       </ValidatorForm>
        </Box>

     </Card>
   </Container>
  </div>
);

AddProduct.propTypes = {};

AddProduct.defaultProps = {};

export default AddProduct;
