import React from 'react';
import PropTypes from 'prop-types';
import './Dashboar.scss';
import { Card,Box, Container,Typography,Divider, CardHeader, CardMedia } from '@mui/material';
import CardItemDash from './cardItemDash';
const Dashboar = ({categories}) => (
  // filterProduct(item.name),
  <div className="Dashboar" data-testid="Dashboar">
    <Container className='col-12 align-items-center'>
      <Box className='display-6'>Dashboard</Box>
      <Divider/>
      <Box className='row mt-3 container'>
        {categories.map((item) => (  
              <Card  className='card col-lg-6 col-md-6 col-sm-12' raised={true} variant="outlined" color='secondary'>        
                <CardItemDash product={item} key={item.name}/>
              </Card>
          ))}
                       
      </Box>
    </Container>
  </div>
);

Dashboar.propTypes = {};

Dashboar.defaultProps = {};

export default Dashboar;
