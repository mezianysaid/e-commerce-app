import React ,{lazy} from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';
import {Container,Card,Box,Fab, Typography, Divider} from '@mui/material'
const ItemCart = lazy(() => import('../ItemCart/ItemCart.lazy'));
const Cart = ({cartItems,qtychangehandler,length,resetProduct,removefromcart,getCartCount,getTotatMoney}) => (
  
  <div className="Cart row" data-testid="Cart">
    {length === 0 ? <Card className='col-lg-8 col-md-12 col-sm-12'>
      Oops, your Cart is empty,would you like to add something go to <a href='/productList'>Shop</a>
    </Card> :
    <Box className='col-lg-8 col-md-12 col-sm-12'>
    <Container >   
        {cartItems.map((item) => (
         <ItemCart product={item} key={item._id} qtychangehandler={qtychangehandler} removefromcart={removefromcart} />
        ))}
    </Container>
    </Box>
    }
    <Card className='col-lg-4 col-md-12 col-sm-12 container' style={{height:'250px'}}>
            <b><h3><u>Subtotal</u>:</h3></b>
             <Divider/>
             <Typography className='align-items-center justify-items-center mt-4' align='center'>
              <Fab variant='extended' className="deletebtn mb-2 " size='medium' color='inherit' >
              <h2>{getCartCount()} :item</h2>
              </Fab>
              <Fab variant='extended' className="deletebtn" size='medium' color='info' >
              <h2>${getTotatMoney().toFixed(2)}</h2>
              </Fab>
              </Typography>
              {/* <Fab variant='extended' onClick={resetProduct} className="deletebtn" size='medium' color='info' >
              <b>Proceed to checkout</b>
              </Fab> */}
      </Card>
  

  </div>
);

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
