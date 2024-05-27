import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Checkout(props) {
  const changeFormData = () => {};

  const [addressData , setAddressData] = useState([]);

  const fetchAddress = async()=>{
    await axios.post("http://localhost:5000/getAddress",props.userData)
    .then(res=>{
      setAddressData(res.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    fetchAddress();
  },[addressData]);

  const [formData, setFormData] = useState({
    fullName: "",
    contactInfo: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  return (
    <React.Fragment>
      <div className="checkoutContainer">
        <div className="checkoutFormContainer">
          <div className="checkoutFormInnerContainer1">
            <div className="checkoutFormHeading">
              <h1>Personal Information</h1>
              <p>Use a permanant address where you can recieve the package</p>
            </div>
            <form className="checkoutForm">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={changeFormData}
                required
              />
              <label htmlFor="contactInfo">Contact Info</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={changeFormData}
                required
              />
              <label htmlFor="address">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
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
                  <label htmlFor="state">State / Province</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
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
              <input type="submit" value="Add Address" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
