import React from 'react';
import PropTypes from 'prop-types';
import './ItemCart.scss';
import {Box,Container,Card,CardMedia,Fab,CardActions,Input,CardContent,FormControl,CardHeader,Button, Typography, InputLabel, Divider} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {Select,MenuItem} from '@mui/material'
const ItemCart = ({product,qty,qtychangehandler,removefromcart,getCartCount,getTotatMoney}) => (
  <div className="ItemCart" data-testid="ItemCart">
    
    <Container>
      <Box className='row'>        
          <Card className='mb-3 ' style={{fontFamilly:'monospace'}}>         
            <CardContent>
                <Box className='col-lg-12 col-md-12'>
                  <Box className='row'>
                    <Box className='col-lg-4'>                      
                      <CardMedia src={product.image} component='img' alt={product.name} width={300} height={300} />
                    </Box>
                    <Box className='col-lg-8 d-flex flex-column'>
                      <h2 className='display-6 align-self-center'>{product.name}</h2>
                      <Divider/>
                      <Typography className=''>{product.description}</Typography>
                      {/* <Typography className=''>description</Typography> */}
                      {/* <Divider/> */}
                      <Box className='mt-4 d-flex flex-column '>                       
                      <FormControl fullWidth style={{color:'white'}} className='col-lg-4 col-md-4 col-sm-6'>
                          <InputLabel id="demo-simple-select-label">Qtty</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={product.qty}
                            label="qtty"
                            name='qtty'
                            onChange={(e) => qtychangehandler(product.id,e.target.value)}
                          >
                          {[...Array(product.qtty).keys()].map((x) => (
                                              <MenuItem key={ x + 1 } value={ x + 1 }>{ x + 1 }</MenuItem>
                                            ))}                   
                          </Select>
                        </FormControl>
                        {/* <Divider/> */}
                        <Typography className='row mt-5'>
                          <Typography className='display-5 col-6' style={{fontWeight:'bolder'}}>${(product.price).toFixed(2)}</Typography>
                          <Typography align='end' className='col-6' style={{fontWeight:'bolder'}}>
                          {product.qtty > 0 ? 'In Stock' : 'Out Stock' }
                          </Typography>
                        </Typography>
                      </Box> 
                      <Divider/>              
                      <Box className='align-self-end' style={{marginTop:'auto'}}>                        
                        
                        <Fab variant='extended' onClick={() => removefromcart(product.id)} className="deletebtn" size='medium' color='warning' aria-label='delete'>
                          <DeleteIcon/>
                          Delete
                        </Fab>
                      </Box>
                    </Box>

                  </Box>
                </Box>
            </CardContent>         
          </Card>                  
      </Box>
    </Container>
  </div>
);

ItemCart.propTypes = {};

ItemCart.defaultProps = {};

export default ItemCart;
