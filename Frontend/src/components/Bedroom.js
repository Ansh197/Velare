import React, { useContext } from 'react'
import axios from 'axios';
import expandArrow from '../images/icons8-expand-arrow-50.png'
import Filter from './Filter';
import { useState,useEffect } from 'react';
import { UserContext } from '../context/UserContext';

export default function Bedroom() {

  const {userData} = useContext(UserContext);

  
  const [colorFilter,setColorFilter] = useState([]);
  const [brandFilter,setBrandFilter] = useState([]);

  const [filterList,setFilterList] = useState({
    colorSet: new Set(),
    brandSet: new Set()
  });

  const applyFilterList = () => {
    for(var i=0;i<productData.length;++i)
      {
        var obj = filterList;
        obj.colorSet.add(productData[i].color);
        obj.brandSet.add(productData[i].brand);
        setFilterList(obj);
      }
  }
  
  const [productData,setProductData] = useState([]);

    function addToCart(index){
        if(userData.isLoggedIn)
          {
            var sendData = {
              product_id:productData[index].product_id,
              user_id: userData.userid
            }
            axios.post('http://localhost:5000/cart/add',sendData)
          }
          else
          {
            console.log('You are not logged in');
          }
      }
    
      const effectFunction = async() =>{
        var productObject = {colorFilter:colorFilter,brandFilter:brandFilter,categoryFilter:["Bedroom"]};
        await axios.post('http://localhost:5000/pages/bedroom',productObject)
          .then(res=>{
            setProductData(res.data);
          })
          .catch(error=>{
            console.log(error);
          })
      }
    
      useEffect(()=>{
        effectFunction();
        applyFilterList();
      },[productData])
    
      const [filter,setfilter] = useState({
        color:false,
        category:false,
        brand:false
      });
      
  return (
    <React.Fragment>
        <div className='productsContainer'>

          <div className='filters'>
            <h1>Filters</h1>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,color:filter.color^1})}}>Color <img src={expandArrow} alt='expand arrow'/></div>
            <div>{filter.color?<Filter setProductFilter={setColorFilter} filterList={filterList.colorSet}/>:null}</div>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,brand:filter.brand^1})}}>Brand <img src={expandArrow} alt='expand arrow'/></div>
            <div>{filter.brand?<Filter setProductFilter={setBrandFilter} filterList={filterList.brandSet}/>:null}</div>
          </div>

            <div className='productsGrid'>

                {productData.map((card,index)=>(
                  <div className='productCard'>
                  <div className='productImageContainer'>
                    <img src={card.image_url} alt={`test-Image-${index}`}/>
                  </div>
                  <div className='productDescriptionContainer'>
                    <h3>{card.description}</h3>
                    <h1>{card.price}</h1>
                  </div>
                  <button  onClick={()=> addToCart(index)}>Add to Cart</button>
                </div>
                ))}
            </div>
        </div>
    </React.Fragment>
  )
}
