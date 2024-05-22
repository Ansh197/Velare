import React, { useEffect } from 'react'
import testImage from '../images/test3.jpg'
import expandArrow from '../images/icons8-expand-arrow-50.png'


const imagesDir = require.context('../images/products',true);
const images = imagesDir.keys().map(image => imagesDir(image));
// console.log(images); 
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

function combineImages(){
  for(var i=0;i<productData.length;++i)
    {
      productData[i].imageURL = images[i];
      // console.log(images[i]);
    }
    console.log(images[0]===productData[0].imageURL)
  // for(var i=0;i<productData.length;++i)
  // {
  //   productData[i].imageURL = images[i].data;
  //   console.log(productData[i].imageURL);
  // }
  console.log(productData);
}

{/* {images.map((image,index)=>
                    <img key={index} src={image} alt={`image-${index}`} />
                )} */}

export default function AllProducts() {

  useEffect(()=>{
    combineImages()
  },[]);

  return (
    <React.Fragment>
        <div className='productsContainer'>

          <div className='filters'>
            <h1>Filters</h1>
            <div className='filter-innerdiv'>Color <img src={expandArrow} alt='expand arrow'/></div>
            <div className='filter-innerdiv'>Brand <img src={expandArrow} alt='expand arrow'/></div>
            <div className='filter-innerdiv'>Category <img src={expandArrow} alt='expand arrow'/></div>
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
