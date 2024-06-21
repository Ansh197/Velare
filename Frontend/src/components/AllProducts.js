import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import expandArrow from '../images/icons8-expand-arrow-50.png'
import Filter from './Filter';
import { UserContext } from '../context/UserContext';

export default function AllProducts() {

  const {userData} = useContext(UserContext);

  const [filterList,setFilterList] = useState({
    colorSet: new Set(),
    categorySet: new Set(),
    brandSet: new Set()
  });

  const [filter,setfilter] = useState({
    color:false,
    category:false,
    brand:false
  });

  const [productData,setProductData] = useState([]);

  const [categoryFilter,setCategoryFilter] = useState([]);
  const [colorFilter,setColorFilter] = useState([]);
  const [brandFilter,setBrandFilter] = useState([]);

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

  const fetchProducts = async() =>{
    var productObject = {colorFilter:colorFilter,brandFilter:brandFilter,categoryFilter:categoryFilter};
    await axios.post('http://localhost:5000/pages/allProducts',productObject)
      .then(res=>{
        setProductData(res.data);
      })
      .catch(error=>{
        console.log(error);
      });
  }

  const applyFilterList = () => {
    for(var i=0;i<productData.length;++i)
      {
        var obj = filterList;
        obj.colorSet.add(productData[i].color);
        obj.categorySet.add(productData[i].category);
        obj.brandSet.add(productData[i].brand);
        setFilterList(obj);
      }
  }

  useEffect(()=>{
    fetchProducts();
    applyFilterList();
  },[productData])

  return (
    <React.Fragment>
        <div className='productsContainer'>

          <div className='filters'>
            <h1>Filters</h1>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,color:filter.color^1})}}>Color <img src={expandArrow} alt='expand arrow'/></div>
            <div>{filter.color?<Filter setProductFilter={setColorFilter} filterList={filterList.colorSet}/>:null}</div>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,brand:filter.brand^1})}}>Brand <img src={expandArrow} alt='expand arrow'/></div>
            <div>{filter.brand?<Filter setProductFilter={setBrandFilter} filterList={filterList.brandSet}/>:null}</div>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,category:filter.category^1})}}>Category <img src={expandArrow} alt='expand arrow'/></div>
            <div>{filter.category?<Filter setProductFilter={setCategoryFilter} filterList={filterList.categorySet}/>:null}</div>
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
