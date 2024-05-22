import React, { useEffect, useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import axios from 'axios';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';


function App() {
  
  // const [message,setMessage] = useState('');

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/').then((res)=>{
  //     console.log(res.data);
  //     setMessage(res.data);
  //   });
  // },[]);

  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/signup' element={<SignupForm/>}></Route>
          <Route exact path='/login' element={<LoginForm/>}></Route>
          <Route exact path='/products' element={<AllProducts/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
