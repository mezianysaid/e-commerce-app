import React ,{useEffect} from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Button, Container, IconButton,Box, Typography } from '@mui/material';
import { Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { FetchPoducts} from '../../Store/actions'
import {useSelector,useDispatch } from 'react-redux';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = []



const Home = () => {
  // function importAllImages(r){
    // return r.keys().map(r);
  // }
  // const images=importAllImages(require.context('../../assets/images'))
  // console.log(images)
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(FetchPoducts());
  },[dispatch]);
  const Products = useSelector(state => state.products)
  const { products } =Products;
  // console.log(products)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = products.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="Home" align='center' data-testid="Home">
      <Card   sx={{height:'auto'}}>
                 <Box className='row'>
                 <Box paragraph className="display-5 col-6">
                      NEW SUMMER COLLECTION FOR MEN, WOMEN,GIRLS,BOYS .....     
                 </Box>
                 <Box className='col-6'>
                   <img src={require("../../assets/images/DSC_1065.jpg")} width={500} height={400}/>
                 </Box>
                 </Box>
        </Card>
          <br/>
          <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{products[activeStep]}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {products.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 455,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.image}
                alt={index}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>

      {/* <Container> */}
        
      {/* </Container> */}
      {/* <Container className='mt-3'>
   <ImageList sx={{ }} variant="woven" cols={3} gap={8}> 
      {images.map((item) => (
        // <Card elevation={8}>
        <ImageListItem key={item} >
          
          <img
            src={`${item}?w=248&fit=crop&auto=format`}
            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
            // alt={item.title}
            loading="lazy"
            className='card'
          />
         
          <ImageListItemBar
            title="Product"
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about this image`}
              >
                {/* <InfoIcon /> */}
              {/* </IconButton> */}
            {/* } */}
          {/* /> */}
        {/* </ImageListItem> */}
        {/* // </Card> */}
      {/* ))} */}
    {/* </ImageList> */}
    {/* </Container> */} 
  </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
