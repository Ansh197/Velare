import React from 'react'
import rightArrow from '../images/rightArrow.png'

export default function Categories(props) {


  return (
    <React.Fragment>
        <div className='categoriesContainer'>
            {props.categoriesData.map((elem)=>
            <div>
              <img src={elem.imageURL} alt='category image'/>
              <div className='linkContainer'>
                <h3>{elem.category}</h3>
                <img src={rightArrow} alt='right arrow' />
              </div>
            </div>
            )}
        </div>
    </React.Fragment>
  )
}
