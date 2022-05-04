import React, { lazy, Suspense, useEffect,useState} from 'react';
import { useDispatch , useSelector } from 'react-redux'
// import { ListProducts } from '../../Store/Selectors';
import { FetchPoducts } from '../../Store/actions/ProductActions'
// import { } from '../../Store'
import PhoneAndroidOutlined from '@mui/icons-material/PhoneAndroidOutlined'
import Girl from '@mui/icons-material/Girl'
import LaptopChromebook from '@mui/icons-material/LaptopChromebook'
import Boy from '@mui/icons-material/Boy'
import TimeToLeave from '@mui/icons-material/TimeToLeave'
import { styled, useTheme,alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
const LazyProductsList = lazy(() => import('./ProductsList'));
  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))
const StyledInputBase = styled(InputBase)(({ theme}) => ({
  color:'inherit',
  '& .MuiInputBase-input': {
    padding : theme.spacing(1,1,1,0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width:'20ch',
    }
  }
}))

const ProductsList = () => {
const men='hood'
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [cat, setCat] = useState('men');
  const [search, setSaerch] = useState('');
  const getProducts = useSelector(state => state.products);
  const { products ,loading,error} = getProducts

  // console.log(getProducts)
  const listproducts =products.filter((item) => {
    if(search){
      return (item.category.toLocaleLowerCase()===cat.toLocaleLowerCase() && item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }else{
   return item.category.toLocaleLowerCase()===cat.toLocaleLowerCase();
    }
  }
  )
  // console.log(products)
  const handleSearch = (e) => {
   const {name,value} =e.target;
   setSaerch(value);
  }
  const tabs=[
    { name:'men',icon:<Boy/>,index:0,content:'men'},
    { name:'women',icon:<Girl/>,index:1,content:'men'},
    { name:'phones',icon:<PhoneAndroidOutlined/>,index:2,content:'men'},
    { name:'laptops',icon:<LaptopChromebook/>,index:3,content:'men'},
    { name:'cars',icon:<TimeToLeave/>,index:4,content:'men'},
  ]
  const handleChange = (event,newValue) => {
    const {name,value} =event.target;
    // console.log(name)
    setValue(newValue);
    setCat(name)
  }  
  useEffect(()=>{    
    dispatch(FetchPoducts())   
  },[dispatch,cat])
 
//  console.log(search)
  let props= {
    listproducts,
    loading,error,
    value,
    handleChange,
    tabs,
    StyledInputBase,
    Search,
    handleSearch,
    search}
  return (
  <Suspense fallback={loading}>
    <LazyProductsList {...props}  />
  </Suspense>
  )
};

export default ProductsList;
