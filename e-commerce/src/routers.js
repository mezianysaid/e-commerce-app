import { Routes,Route,Redirect, Navigate} from "react-router-dom"
import Home from './components/Home/Home';
import ProductList from './components/ProductsList/ProductsList.lazy';
import AddProduct from './components/AddProduct/AddProduct.lazy';
import ProductInfo from './components/ProductInfo/ProductInfo.lazy';
import Cart from './components/Cart/Cart.lazy';
import Register from './components/Register/Register.lazy';
import Login from './components/Login/Login.lazy'
import ContactUs from './components/ContactUs/ContactUs.lazy'
import AboutUs from './components/AboutUs/AboutUs.lazy'
import  Dashboar from './components/Dashboar/Dashboar.lazy'
import Comments from './components/Comments/Comments.lazy'
      //  const user = localStorage.getItem("user");
      // const {isAuthenticated} =user
      // console.log("this", isAuthenticated);
const Routers=[
         <Routes>
              <Route exact path="/" key='home' element={<Home/>}/>
              <Route exact path='/productList' key='productList' element={<ProductList/> }/>
              <Route exact path='/productInfo/:id' key='productinfo' element={<ProductInfo/>}/>
              <Route exact path='/AddProduct' key='AddProduct' element={ <AddProduct/>}/>              
              <Route exact path='/shopcart' key='shopcart' element={ <Cart/>} />              
              <Route exact path='/register' key='register' element={ <Register/>} />              
              <Route exact path='/login' key='login' element={ <Login/>} />              
              <Route exact path='/contactUs' key='contactUs' element={ <ContactUs/>} />              
              <Route exact path='/aboutUs' key='aboutUs' element={ <AboutUs/>} />              
              <Route exact path='/dashboard' key='dashboard' element={ <Dashboar/>} />              
              <Route exact path='/comments' key='comments' element={ <Comments/>}/>
              <Route  path='/*' key='athor' element={ <Home />}/>
        </Routes>

]

export default Routers;