import React,{ lazy} from 'react';
import PropTypes from 'prop-types';
import './ProductsList.scss';
import { Container,Box,Typography } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SearchIcon from '@mui/icons-material/Search'
const Product = lazy(() => import('../Product/Product.lazy'))

function TabPanel(props) {
  const { children, value,name, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography> {children} </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductsList = ({listproducts,value,tabs,loading,error,handleChange,StyledInputBase,Search,search,handleSearch}) => {
  return (
  <div className="ProductsList" data-testid="ProductsList">
    <Box className='col-lg-12 col-md-12'>
    <Box className='row'> 
    <Box className='col-lg-8 col-md-8 col-sm-12 ' sx={{ maxWidth: {lg:1000, xs:400, sm:450},color:'white',marginTop:-3}} > 
      <Tabs value={value}  onChange={handleChange} indicatorColor="secondary" textColor="secondary"
       variant="scrollable" 
       scrollButtons={true} allowScrollButtonsMobile={true} aria-label='scrollable force tabs'
       >        
       {tabs.map((item)=>(
         <Tab  icon={item.icon}  name={item.name}  iconPosition="start" label={item.name} {...a11yProps(item.index)} />
       ))}      

       </Tabs> 
       </Box> 
       <Box className='col-lg-4 col-md-4 '>         
        <Search className='searchDiv' sx={{ marginTop:{lg:0,sm:1,xs:1}, marginRight:{lg:0,sm:-3,xs:0},width:{lg:'30ch',sm:'100%',md:'20ch',xs:'100%'}}}>                  
                      <SearchIcon />                    
                <StyledInputBase sx={{width:{lg:'30ch',sm:'80%',xs:'80%'},marginLeft:{lg:-4,sm:-4}}}
                      placeholder="Search..." 
                      inputProps={{'aria-label': 'search'}}
                      name="search"
                      value={search}
                      onChange={handleSearch}
                      >
                </StyledInputBase>
              </Search>

        </Box> 
        </Box> 
        </Box> 
        
        <Box>                    
            {tabs.map((item)=>(  
              <TabPanel value={value} index={item.index}>              
                  <Box className="row">
                  {listproducts.map((item) => (
                    <Box className="col-lg-4 col-md-6 col-sm-12">
                      <Product product={item} key={item._id}/>
                    </Box>
                  ))}
                  </Box>

              </TabPanel>
            ))}
        </Box>   
   
   
  </div>
  )}

ProductsList.propTypes = {
  // msg:PropTypes.string.isRequired,
  // low:PropTypes.string.isRequired
};

ProductsList.defaultProps = {};

export default ProductsList;
