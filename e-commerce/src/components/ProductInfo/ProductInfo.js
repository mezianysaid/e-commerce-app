import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import './ProductInfo.scss';
import { Box, Button, Card,CardActions,CardMedia, CardContent,Container, Divider, Typography, Select } from '@mui/material';
import FavoriteIcon  from '@mui/icons-material/Favorite'
import HeartBrokenSharp from '@mui/icons-material/HeartBrokenSharp'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { IconButton,InputLabel,MenuItem,FormControl } from '@mui/material';
import Reviews from '@mui/icons-material/Reviews'
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add'
import Preview from '@mui/icons-material/Preview'
import {Link} from 'react-router-dom'
import { ValidatorForm , TextValidator } from 'react-material-ui-form-validator'

const responsive ={
  superLargeDesktop:{
    breakpoint: { max:4000, min:3000},
    items:3
  },
  desktop: {breakpoint: { max:3000, min:1024},
  items:3},
  mobile : {breakpoint:{ max:1024, min:0},
  items:2}
}
const responsive1 ={
  superLargeDesktop:{
    breakpoint: { max:4000, min:3000},
    items:5
  },
  desktop: {breakpoint: { max:3000, min:1024},
  items:5 },
  mobile : {breakpoint:{ max:1024, min:0},
items:3}
}
const ProductInfo = ({product,images,file,handleSubmit,
  handleLikes,handleAddToCard,products,handleImage,removeProductHandler,
  handleAddImages,image ,show,setFile,disable,hide,qty,setQty,handlechange}) => (

  <div className="ProductInfo" data-testid="ProductInfo">
    <Box className='TopBox'>
    <Container className="container">
    <Box className="mr-0 mb-3" >
      <Typography align='right'>
               <Button variant='contained' component={Link} to={'/productlist'}>Product List </Button>
               <Button variant='contained' color='error' onClick={removeProductHandler}>delete</Button>
               <IconButton  style={{color:'white'}} onClick={handleAddImages} >
               <Avatar  style={{width:"40px",height:'40px',color:'white'}}> <AddIcon></AddIcon></Avatar>
               </IconButton>
               Add New Image
               </Typography>
      {show &&<Typography className='card card-sucess mb-2'>
      <ValidatorForm onSubmit={handleSubmit} encType="multipart/form-data">
      <input type='file' 
         className="col-10 mt-2 btn btn-outline-secondary"
         name="file"
         value={file}       
         onChange={event=>{const file=event.target.files[0];
          setFile(file)}}

        />
        <Typography align='end'>
        <Button variant='contained' type='submit' style={{backgroundColor:'white',color:'black'}}>Save</Button>
        </Typography>
        </ValidatorForm>
      </Typography>
      }
        
    </Box>


    <Card className="cardinfo  col-12"  sx={{width:{lg:'1000px',md:'600px',sm:'400px',xs:'400px'} }}>          
         
          <Box className="row">          
          <Box className="fisrtBox col-lg-5 col-md-12 col-sm-12" style={{height:'280'}} >
            <Box className='new'>
             {/* <b> New</b> */}
               <Card className="cardimage mt-1"   sx={{height:{lg:450,sm:400,xs:400},width:{lg:300,sm:350,md:200,xs:300},marginBottom:{xs:5,},marginLeft:{lg:-20,sm:-10,md:20,xs:0}}}>     
             <center className="display-6">${(product.price).toFixed(2)} <i style={{color:'red'}}>/${product.oldPrice}</i></center>
                 <Divider/>
                  <CardMedia component="img" alt="green"  height='400' src = {product.image}/>  
                </Card> 
            </Box>
          </Box>
         
          <Box className="secondBox d-flex flex-column  col-lg-7 col-md-12 col-sm-12" >    
              <center className="display-4" >{product.name}</center>
              <Box className='rollImages mt-3'> 
              {/* {!produc.similarImages.length && 
                     <center style={{display:produc.similarImages}}>
                      <img src={produc.image} key={produc._id}  className='card' height='300'/> 
                      </center>
              } */}
             
                  <Carousel responsive={responsive}  autoPlay={true}  keyBoardControl={true} show={true}>
                  
                    {product.similarImages.map((item) => (
                      
                      <img src={item.filename} key={item._id}  className='card' height='300' alt={item.filename}/>                                          
                    ))}
                      <img src={product.image} key={product._id}  className='card' height='300'/> 
                      
                   </Carousel>  
                            
                </Box>
           <Box className='description align-self-center'> 
            <b>{product.description}</b>
           </Box>
             
           <Box className="col-12  align-self-end" style={{marginTop:'auto'}}>           
                <Box className="row ">
                    <Box className="col-2">
                      <IconButton   onClick={handleLikes} disabled={disable} >
                      <FavoriteIcon  style={{width:"40px",height:'40px'}} />          
                      </IconButton>
                      <Box className="ml-2">{product.likes}</Box>
                    </Box>
                    <Typography className="col-2 mt-3" >
                      <Preview/>
                      <Box className='mt-3'>{product.views}</Box>
                    </Typography>
                    <Typography className="col-3 mt-3" >
                      
                      <Box className='mt-3'>
                      <FormControl fullWidth >
                          <InputLabel id="demo-simple-select-label">Qtty</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={qty}
                            label="qtty"
                            name='qtty'
                            onChange={handlechange}
                          >
                          {[...Array(product.qtty).keys()].map((x) => (
                                              <MenuItem key={ x + 1 } value={ x + 1 }>{ x + 1 }</MenuItem>
                                            ))}                   
                          </Select>
                        </FormControl>                     
                      </Box>
                    </Typography>
                    <Box  className='col-5  mt-4' >
                       <Button variant="contained" onClick={handleAddToCard} style={{backgroundColor:'#ef5350'}} >Add to Cart</Button>
                     </Box>
                 </Box>
            </Box>
            {/* </CardActions> */}
          </Box>
          </Box>
        </Card>
       
    </Container>
    </Box>
    
    <Box className='BottomBox mt-4'>
    <Container className="secondContainer" sx={{width:{lg:'1000px',sm:'450px',xs:'400px'}}}>
   
    <Divider height="5px"></Divider>
    <Divider height="5px"></Divider>
    <Divider height="5px"></Divider> 
    <Box className='mt-3 container'>              
             <Carousel responsive={responsive1} autoPlay={true}  keyBoardControl={true}>
                 {products.map((item) => (
                   <img src={item.image} className="card" onChange={handleImage} name="image" value={item.name} key={item.name} alt={item.name} width={150} height={150} /> 
                 ))}  
                 
            </Carousel>                      
    </Box> 

    </Container> 
    </Box>
  </div>
);

ProductInfo.propTypes = {};

ProductInfo.defaultProps = {};

export default ProductInfo;
