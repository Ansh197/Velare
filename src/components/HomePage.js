import React from 'react'
import homeimg from '../images/HomeFurniture.png'
import rightArrow from '../images/rightArrow.png'

export default function HomePage() {
  return (
    <React.Fragment>
        <div className='homePageContainer'>
            <div className='homePageHeading'>
                <h1>Transform your home</h1>
                <h2>Modern furniture that lasts a liftime</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .</p>
                <button><a>Shop Now <img src={rightArrow} /></a></button>
            </div>
            <img src={homeimg} alt='home image'/>
        </div>
    </React.Fragment>
  )
}