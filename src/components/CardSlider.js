import React from "react";
import sofa1 from "../images/sofa1.jpg";
import arrow from "../images/rightArrow.png"

export default function CardSlider(props) {
  const sliderData = props.sliderData;
  return (
    <React.Fragment>
      <div className="sliderOuterContainer">
        {sliderData.map((elem)=>
          <div className="sliderinnerdiv">
          <img src={sofa1} />
          <div className="cardslider-description">
            <h2>Now ${elem.price} USD</h2>
            <p>{elem.description}</p>
            <a>Shop Now <img alt="arrow" style={{width:'1.5rem',height:'1.5rem'}} src={arrow}/></a>
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  );
}
