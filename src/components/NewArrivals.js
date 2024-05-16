import React from 'react'
import CardSlider from './CardSlider'

export default function NewArrivals() {
  return (
    <React.Fragment>
        <div style={{margin:'0 5rem'}}>
            <h2 style={{marginBottom:'4rem',marginTop:'3rem'}}>New Arrivals</h2>
            <CardSlider/>
        </div>
    </React.Fragment>
  )
}
