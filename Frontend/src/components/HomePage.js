import React from 'react'
import CardSlider from './CardSlider'
import rightArrow from '../images/rightArrow.png'
import testimage from '../images/test3.jpg'
import reviewImage from '../images/reviewsofa.jpg'
import Categories from './Categories'
import sofa from '../images/sofa1.jpg'
import nature from '../images/nature.webp'
import officeChair from'../images/OfficeChair1.jpeg'
import homeDecorImage from '../images/homeDecorImage.webp'
import SeatingImage from '../images/SeatingImage.jpg'
import BedroomImage from '../images/BedroomImage.jpg'

export default function HomePage() {

  const sliderData = [
    {
      imgurl:testimage,
      price:"180",
      description:"Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
    },
    {
      imgurl:testimage,
      price:"180",
      description:"Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
    },
    {
      imgurl:testimage,
      price:"180",
      description:"Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
    },
    {
      imgurl:testimage,
      price:"180",
      description:"Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
    },
  ]

  const homepagestyle = {
    backgroundImage:`url(${testimage})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '40rem',
  }

  const categoriesData = [
    {
      imageURL : homeDecorImage,
      category : 'Home Decor' ,
      linkData : 'homeDecor'
    },
    {
      imageURL : SeatingImage,
      category : 'Seating' ,
      linkData : 'seating'
    },
    {
      imageURL : BedroomImage,
      category : 'Bedroom' ,
      linkData : 'bedroom'
    },
    {
      imageURL : officeChair,
      category : 'Office' ,
      linkData : 'office'
    }
  ]

  return (
    <React.Fragment>
      <div className='homePageContainer' style={homepagestyle}>
        <div className='homepageinnercontainer'>
            <div className='homePageHeading'>
                <h1>Elevate Your Home with Exquisite Design</h1>
                <h2>Curated Collections Featuring Superior Materials and Detail</h2>
                <p>Redefine your living spaces with furniture that embodies superior quality and a timeless aesthetic. Our commitment to excellence ensures that every detail contributes to a harmonious and luxurious home environment.</p>
                <button><a href='/'>Shop Now <img src={rightArrow} alt='right arrow' /></a></button>
            </div>
        </div>
      </div>

      <div className='homePageHeading2'>
        <h1>Upto 30% Off Site Wide</h1>
        <p>Shop our limited collections of award winning sustainable furniture. Modern desing, affordable prices and oh, so comfy.</p>
      </div>

        <div style={{padding:'0 5rem'}}>
            <CardSlider sliderData={sliderData}/>
        </div>

        <div className='homePageHeading3'>
          <h1>Perfect Fit. Free Delivery. Hassle-Free Returns.</h1>
        </div>

        <div className='reviewContainer'>
          <div className='reviewDescription'>
            <h1>*****</h1>
            <p>"I am thrilled with the Elysian Velvet Sofa. The luxurious velvet fabric, solid craftsmanship, and perfect fit for my living room make it a standout piece. Free delivery and hassle-free returns made the purchase even better. Highly recommended!"</p>
            <p>CLAIRE</p>
          </div>
          <div className='reviewImage'><img src={reviewImage} alt='reviewImage'/></div>
        </div>

        <div className='homePageHeading2'>
        <h1>Moving Fast</h1>
        <p>Only a few articles left. Get them before they're gone.</p>
      </div>

      <div style={{marginBottom:'5rem'}}>
        <Categories categoriesData={categoriesData}/>
      </div>

      <div className='homePageHeading4'><h1>More Nature. Less Waste.</h1></div>

      <div className='sustainable-container'>
        <div className='sustainable-img'><img src={nature} alt='nature'/> </div>
        <div className='sustainable-heading'><h1>Nature First. Beautiful Furniture. Greener Planet.</h1></div>
      </div>


    </React.Fragment>
  )
}