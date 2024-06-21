import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Filter(props) {

  const filterList = Array.from(props.filterList).map(elem => ({
    value: elem,
    isChecked: false
  }))

  const [checkboxes, setCheckboxes] = useState(filterList);

  async function setFilter(){
    var checkedFilter = [];
    checkboxes.map(elem => 
      elem.isChecked? checkedFilter.push(elem.value) : null
    );
    props.setProductFilter(checkedFilter);
    // await axios.post('http://localhost:5000/filters/allProducts',)
  }

  useEffect(()=>{
    setFilter();
  },[checkboxes])

  const handleCheckboxChange = (value) => {
    setCheckboxes(prevState =>
      prevState.map(checkbox =>
        checkbox.value === value ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
      )
    );
  };

  return (
    <React.Fragment>
      {checkboxes.map( elem =>
        (<div>
          <label key={elem.value}>
          <input type='checkbox' checked={elem.isChecked} onChange={()=>handleCheckboxChange(elem.value)} />
          {elem.value}
      </label>
        </div>))}
    </React.Fragment>
  )
}
