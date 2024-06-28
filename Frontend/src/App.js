import React, { useEffect, useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout' 
import Profile from './components/Profile';
import HomeDecor from './components/HomeDecor';
import Seating from './components/Seating';
import Bedroom from './components/Bedroom';
import Office from './components/Office';
import OrderDetails from './components/OrderDetails'
import {UserContext} from './context/UserContext'
import Orders from './components/Orders';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  const [userData,setUserData] = useState({
    isLoggedIn:false,
    userid: '',
    username:'',
    email:''
  });
  
  return (
    <React.Fragment>
      <UserContext.Provider value={{userData,setUserData}}>
        <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
          <Routes>
            <Route exact path='/' element={<HomePage/>}></Route>
            <Route exact path='/signup' element={<SignupForm/>}></Route>
            <Route exact path='/login' element={<LoginForm/>}></Route>
            <Route exact path='/products' element={<AllProducts/>}></Route>
            <Route exact path='/homeDecor' element={<HomeDecor/>}></Route>
            <Route exact path='/seating' element={<Seating/>}></Route>
            <Route exact path='/bedroom' element={<Bedroom/>}></Route>
            <Route exact path='/office' element={<Office/>}></Route>
            <Route exact path='/cart' element={userData.isLoggedIn ? <Cart/> : <LoginForm/>}></Route>
            <Route exact path='/checkout' element={userData.isLoggedIn ? <Checkout/> : <LoginForm/>}></Route>
            <Route exact path='/myprofile' element={userData.isLoggedIn ? <Profile/> : <LoginForm/>}></Route>
            <Route exact path='/orders' element= {userData.isLoggedIn? <Orders/> : <LoginForm/>}></Route>
            <Route exact path='/orderDetails/:orderId' element= {userData.isLoggedIn? <OrderDetails/> : <LoginForm/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
