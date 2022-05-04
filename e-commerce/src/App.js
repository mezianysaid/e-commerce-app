
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Card, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import {useMediaQuery,Fab} from '@mui/material'
import Routers from './routers';
import {useTheme,styled} from '@mui/material/styles';
import ContactMail from '@mui/icons-material/ContactMail'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistration from '@mui/icons-material/AppRegistration'
import Info from '@mui/icons-material/Info'
import ShopIcon from '@mui/icons-material/Shop'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import {useDispatch, useSelector} from 'react-redux'
import { loadUser } from './Store/actions';
import {Provider} from 'react-redux' 
import store from './Store/store';
import Dashboard from '@mui/icons-material/Dashboard'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import CommentIcon from '@mui/icons-material/Comment';
import {Menu,MenuItem} from '@mui/material'
import { Logout } from './Store/actions'
import Login from './components/Login/Login.lazy'
const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const cart=useSelector(state => state.cart);
  const { cartItems } = cart;
  const User=useSelector(state => state.user);
  const {isAuthenticated,user}=User;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getCartCount = () => {
    return cartItems.reduce((qty,item) => Number(item.qty) + qty,0)
  }
  const dispatch=useDispatch()
  React.useEffect(() => {
     store.dispatch(loadUser())
  },[])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = () => {
        dispatch(Logout());
  }
  const itemsList = [
              {
                name:'Home',
                icon:<HomeIcon/>,
                link:'/'
              },
              {
                name:'Dashboard',
                icon:<Dashboard/>,
                link:'/dashboard'
              },
              {
                name:'Shop',
                icon:<ListIcon/>,
                link:'/productList'
              },
              {
                name:'Add New Product',
                icon:<AddIcon />,
                link:'/AddProduct'
              },
            ]
  const paramList= [
    {
      name:`Cart `,
      fab:<Fab variant='extended' size='small' color='info' >{getCartCount()}</Fab>,
      icon:<ShopIcon/>,
      link:'/shopcart'
    },
    {
      name:'Community',
      icon: <CommentIcon/>,
      link:'/comments'
    },
    {
      name:'Contact Us',
      icon: <ContactMail/>,
      link:'/contactus'
    },
    { 
      name: 'About Us',
      icon: <Info/>,
      link: '/aboutUs'
    },
    { 
      name:'Login',
      icon:<LoginIcon/>,
      link:'/login'
    },
    {
      name:'Sign Up',
      icon:<AppRegistration/>,
      link:'/register'
    },
    
  ]
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
   {/* list of Links of SideNav */}
      <List>
        {itemsList.map((item) => (
          <ListItem button key={item.name}  component={Link} to={item.link}>
            <ListItemIcon sx={{color:{lg:'white',sm:'black'}}} >
             {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} className="display-6" />
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <List>
        {paramList.map((item) => (
          <ListItem button key={item.name}  component={Link} to={item.link}>
            <ListItemIcon sx={{color:{lg:'white',sm:'black'}}} >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />{item.fab}
          </ListItem>
        ))}
      {isAuthenticated ? <Fab  variant='extended' size='small'  className='mt-1' onClick={handleLogout} style={{ marginLeft:12,fontWeight:'bolder' }} > <ShoppingCart/>Log out</Fab>: null}

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // if(!isAuthenticated){
    // return <Login />
  // }
  return (
    // <Provider store={Store}>
    <div className='App'>
    
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'#1F1F1F', 
          // overflowX:{sm: 'hidden'},
        }}

      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className='col-12'> 
          <div className='row'>
         
         <div className='col-6'>
          <div noWrap className='display-6'>
            Shop Street
          </div>
          </div>
          {/* <div className='col-4'> */}
          {/* </div> */}
          <div className='col-6' align="end" hidden={!matches}>
          {/* <Typography component="div" className='col-4'> */}
          {isAuthenticated ? (<Fab className='user' variant='extended' size='small'>{user.username +'|'+user.role}</Fab>) : null}

          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}  />
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem component={Link} to={'/shopcart'}>
        <ListItemIcon> <ShoppingCart/></ListItemIcon>
        
          <Badge badgeContent={getCartCount()} color="primary">
                     {/* <MailIcon color="action" /> */}
                    Cart 
                     </Badge>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to={'/register'}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Sign Up
        </MenuItem>
        {/* <MenuItem component={Link} to={'/login'} */}
        {!isAuthenticated ? (<MenuItem variant='extended' size='small'component={Link} to={'/login'}>
        <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          login</MenuItem>):null}
        {isAuthenticated ? (<MenuItem variant='extended' size='small'  className='mt-1' onClick={handleLogout}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
           Log out</MenuItem>):null }
         
        </Menu>

            {/* <Fab variant='extended' size='small' component={Link} to={'/shopcart'} style={{ marginRight:4,fontWeight:'bolder' }} > */}
                     {/* <Badge badgeContent={getCartCount()} color="primary"> */}
                     {/* <MailIcon color="action" /> */}
                     {/* <ShoppingCart/>Cart  */}
                     {/* </Badge> */}
               {/* <Fab variant='extended' size='small' color='info' >{getCartCount()}</Fab> */}
               {/* </Fab> */}
              {/* {user.isAuthenticated ? (<Fab variant='extended' size='small'component={Link} to={'/login'} style={{ color:'black' ,fontWeight:'bolder',marginRight:4}}>login</Fab>):null} */}
            
            {/* <Fab variant='extended' size='small' component={Link} to={'/register'} style={{ color:'black',fontWeight:'bolder',marginBlock:2 }}>sign up</Fab> */}
          {/* </Typography> */}
          </div>
          </div> 
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent" elevation={8} className="drwerClass"        
          sx={{           
            marginBlock:5,
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#1F1F1F', color:'white' },
          }}
          open
        >
          
          {drawer}
          
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography >
          <Container>

            {Routers}
                    
          </Container>       
        </Typography>
      
      </Box>
    </Box>
    {/* </Provider> */}
    </div>    
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;