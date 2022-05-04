import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import  CardActions  from '@mui/material/CardActions';
import  CardContent  from '@mui/material/CardContent';
import  CardMedia  from '@mui/material/CardMedia';
import  {Button,Box}  from '@mui/material';
import  {Typography}  from '@mui/material';
import  { Rating }  from '@mui/material'
const Product = ({product,value,incrementVisitors,setValue}) => (
  <Box className="Product" data-testid="Product">
    <Card elevation={8} className="mt-3 pb-1 procard" style={{height:'auto'}}>
    <Box className='new'>
             <b className='mt-3 card'> New</b>
    </Box>
      <img src={product.image} alt={product._id} width='100%' height={250}  />
    
    <CardContent >    
         <Box className="row">
           <Box className="col-4 text-center price display-6 mt-3" >${(product.price).toFixed(2)} </Box>
           <Box className='col-8 mb-0 mr-0 pr-0 mt-3 container-fluid' align='right'>
              <Rating className=''
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
              />
        </Box>
        </Box>
    </CardContent>
    <Divider/>
    <Box className='pt-1'>
    <center align="center">
        <Button component={Link} to={`/productInfo/${product._id}`} onClick={incrementVisitors} variant="contained"  style={{ backgroundColor:'#004c99'}}>SHOP NOW</Button>
   </center>
    </Box>
    </Card>
  </Box>
);

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
