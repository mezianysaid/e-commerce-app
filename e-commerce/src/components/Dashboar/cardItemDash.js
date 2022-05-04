import React,{ useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Dashboar.scss';
import { useDispatch ,useSelector } from 'react-redux';
import { FetchPoducts, saveQttyNumber } from '../../Store/actions'
import { Card,Box, Container,Typography,Divider, Avatar,CardHeader, CardMedia } from '@mui/material';


const CardItemDash = props => {
  const dispatch = useDispatch();
  const product = props.product;
  const category = product.name;
  const [qttyTotal,setQttyTotal] = useState(null);
  const [numberTotal, setNumberTotal ] = useState(null);
  
//   const [name,setName ] = useState();
  const Products= useSelector(state => state.products) ;
  const { products } = Products;
  
  const filterProduct = (categ) => {
    const pros=products.filter((item) => {
      return item.category.toLocaleLowerCase() === categ.toLocaleLowerCase();
    })
    
    const qttyt = pros.reduce((qtty,item) => Number(item.qtty) + qtty,0)
    setNumberTotal(pros.length);
    setQttyTotal(qttyt);
    
    // return pros;
    // localStorage.setItem("qttyTotal",qttyt);
    // localStorage.setItem("NTotal",pros.length);
  }
  
useEffect(() => {
 dispatch(FetchPoducts())
//  .then(() => 
 filterProduct(category)
//  .then(() => 
 dispatch(saveQttyNumber(qttyTotal,numberTotal))
//  .then(() => {
    // let prodInfo=localStorage.getItem("productInfo");
    // setQttyTotal(prodInfo.qtty_total)
    // setNumberTotal(prodInfo.number_total)
//  })
 
  
},[dispatch,category,qttyTotal,numberTotal])


return (
  <div className="Dashboar" data-testid="Dashboar">         
              {/* <Card  className='card col-lg-6 col-md-6 col-sm-12' raised={true} variant="outlined" color='secondary'>         */}
                      <Box className='row' sx={{backgroundColor:'secondary'}}>
                        <Avatar style={{width:'80px', height:'80px',marginLeft:'5px',marginTop:'5px'}} className='col-6 icon'>{product.icon}</Avatar>
                        <Box  className='col-6 mt-2 display-4'>{category}</Box>
                      </Box> 
                      <Box className='mt-1'>
                        <Divider></Divider>
                        {/* <Box className='row'> */}
                        <h3 className=''>Number Total:</h3>
                        <h1 className='display-1 ' align='end'>{numberTotal}</h1>
                        {/* </Box> */}
                        
                        <Divider/>        
                        {/* <Box className='row'> */}
                        <h3 className=''>Quantity Total in the Stock:</h3>
                        <h1 className='display-1 ' align='end'>{numberTotal} {qttyTotal}</h1>
                        {/* </Box> */}
                      </Box>                   
                {/* </Card> */}
            </div>

);
}

CardItemDash.propTypes = {};

CardItemDash.defaultProps = {};

export default CardItemDash;
