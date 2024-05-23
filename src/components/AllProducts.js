import React, { useEffect, useState } from 'react'
import testImage from '../images/test3.jpg'
import expandArrow from '../images/icons8-expand-arrow-50.png'
import Filter from './Filter';

{/* {images.map((image,index)=>
                    <img key={index} src={image} alt={`image-${index}`} />
                )} */}

const imagesDir = require.context('../images/products',true);
const images = imagesDir.keys().map(image => imagesDir(image));
const productData=[
  {
    description:'Farina half leather sectional sofa' ,
    price:'3000 $',
  },
  {
    description:"Versatile sectional with ample seating",
    price:'1800 $'
  },
  {
    description:"Convertible sofa for flexible living",
    price:'5500 $'
  },
  {
    description:'Elegant tuxedo sofa with high arms',
    price:'2300 $'
  },
  {
    description:'Chaise sofa for luxurious lounging',
    price:'3100 $'
  }
]

export default function AllProducts() {

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
            <div>{filter.color?<Filter/>:null}</div>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,brand:filter.brand^1})}}>Brand <img src={expandArrow} alt='expand arrow'/></div>
            <div className='filter-innerdiv' onClick={()=>{setfilter({...filter,category:filter.category^1})}}>Category <img src={expandArrow} alt='expand arrow'/></div>
          </div>

            <div className='productsGrid'>

                {productData.map((card,index)=>(
                  <div className='productCard'>
                  <div className='productImageContainer'>
                    <img src={images[index]} alt={`test-Image-${index}`}/>
                  </div>
                  <div className='productDescriptionContainer'>
                    <h3>{card.description}</h3>
                    <h1>{card.price}</h1>
                  </div>
                  <button>Add to Cart</button>
                </div>
                ))}
                {/* <div className='productCard'>
                  <div className='productImageContainer'>
                    <img src={testImage} alt='test-Image'/>
                  </div>
                  <div className='productDescriptionContainer'>
                    <h3>Farina half leather sectional sofa</h3>
                    <h1>3000.00 $</h1>
                  </div>
                  <button>Add to Cart</button>
                </div>
                <div className='productCard'>
                  <div className='productImageContainer'>
                    <img src={testImage} alt='test-Image'/>
                  </div>
                  <div className='productDescriptionContainer'>
                    <h3>Farina half leather sectional sofa</h3>
                    <h1>3000.00 $</h1>
                  </div>
                  <button>Add to Cart</button>
                </div> */}

            </div>
        </div>
    </React.Fragment>
  )
}
