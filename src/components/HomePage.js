import React from 'react'
import CardSlider from './CardSlider'
import rightArrow from '../images/rightArrow.png'
import testimage from '../images/test3.jpg'

export default function HomePage() {

  const homepagestyle = {
    backgroundImage:`url(${testimage})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '40rem',
  }

  return (
    <React.Fragment>
      <div className='homePageContainer' style={homepagestyle}>
        <div className='homepageinnercontainer'>
            <div className='homePageHeading'>
                <h1>Elevate Your Home with Exquisite Design</h1>
                <h2>Curated Collections Featuring Superior Materials and Detail</h2>
                <p>Redefine your living spaces with furniture that embodies superior quality and a timeless aesthetic. Our commitment to excellence ensures that every detail contributes to a harmonious and luxurious home environment.</p>
                <button><a>Shop Now <img src={rightArrow} /></a></button>
            </div>
            {/* <img src={testimage} alt='home image'/> */}
        </div>
      </div>

      <div className='homePageHeading2'>
        <h1>Upto 30% Off Site Wide</h1>
        <p>Shop our limited collections of award winning sustainable furniture. Modern desing, affordable prices and oh, so comfy.</p>
      </div>

        {/* <div>
          <div style={{margin:'0 5rem'}}>
              <h2 style={{marginBottom:'4rem',marginTop:'3rem'}}>New Arrivals</h2>
              <CardSlider/>
          </div>
        </div> */}

    </React.Fragment>
  )
}