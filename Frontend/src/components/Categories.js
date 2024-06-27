import React from 'react'
import rightArrow from '../images/rightArrow.png'
import { Link } from 'react-router-dom'

export default function Categories(props) {


  return (
    <React.Fragment>
        <div className='categoriesContainer'>
            {props.categoriesData.map((elem,index)=>
            <Link to={elem.linkData}>
            <div>
              <img src={elem.imageURL} alt={`category image ${index}`}/>
              <div className='linkContainer'>
                <h3>{elem.category}</h3>
                <img src={rightArrow} alt='right arrow' />
              </div>
            </div>
            </Link>
            )}
        </div>
    </React.Fragment>
  )
}
