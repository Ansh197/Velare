import React from 'react'
import { useState,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function ProfileForm(props) {

    const {userData} = useContext(UserContext);
    
    const changeFormData = (e)=>{
        const {name,value} = e.target;
        setFormData(prevState=>({
          ...prevState,
          [name]: value,
        }));
      };
    
      const formSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5000/address/add',formData)
        await axios.post("http://localhost:5000/address/get",userData)
        .then(res=>{
          props.setAddressData(res.data);
        })
        .catch(error=>{
          console.log(error);
        })
        setFormData({
          full_name: "",
          phone_number: "",
          street_address: "",
          city: "",
          province: "",
          zip: "",
          user_id:userData.userid,
          address_id:''
        });
        // props.setShowForm(false);
      }
    
      const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        street_address: "",
        city: "",
        province: "",
        zip: "",
        user_id:userData.userid,
        address_id:''
      });

  return (
    <React.Fragment>
            <form className="checkoutForm" style={{width:'70%'}} method="post" onSubmit={formSubmit}>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={changeFormData}
                required
              />
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={changeFormData}
                required
              />
              <label htmlFor="street_address">Street Address</label>
              <input
                type="text"
                name="street_address"
                value={formData.street_address}
                onChange={changeFormData}
                required
              />
              <div className="localAddress">
                <div className="localAddressInput">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={changeFormData}
                    required
                  />
                </div>
                <div className="localAddressInput">
                  <label htmlFor="province">State / Province</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={changeFormData}
                    required
                  />
                </div>
                <div className="localAddressInput">
                  <label htmlFor="zip">Zip / Postal Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={changeFormData}
                    required
                  />
                </div>
              </div>
              <input type="submit" value="Add Address" style={{marginBottom:'0'}}/>
              <button className='profileFormButton' onClick={()=>props.setShowForm(false)}>Cancel</button>
            </form> 
    </React.Fragment>
  )
}
