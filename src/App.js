import React, { useEffect, useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import axios from 'axios';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import NewArrivals from './components/NewArrivals';
import LoginForm from './components/LoginForm';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


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
          <Route exact path='/signin' element={<SignupForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
