import React, { useEffect, useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import axios from 'axios';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import NewArrivals from './components/NewArrivals';


function App() {
  
  // const [message,setMessage] = useState('');

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/').then((res)=>{
  //     console.log(res.data);
  //     setMessage(res.data);
  //   });
  // },[]);

  return (
    <>
      <Navbar/>
      {/* <SignupForm/> */}
      <HomePage/>
      <NewArrivals/>
    </>
  );
}

export default App;
