import React, { useEffect, useState } from "react";

export default function Filter(props) {
  const filterList = Array.from(props.filterList).map((elem) => ({
    value: elem,
    isChecked: false,
  }));

  const newFilterList = filterList.map(elem =>{
    if(props.getProductFilter.includes(elem.value)){
      return{
        ...elem,
        isChecked:true
      };
    }
    return elem;
  })

  const [checkboxes, setCheckboxes] = useState(newFilterList);

  async function setFilter() {
    var checkedFilter = [];
    checkboxes.map((elem) =>
      elem.isChecked ? checkedFilter.push(elem.value) : null
    );
    props.setProductFilter(checkedFilter);
  }

  useEffect(() => {
    setFilter();
  }, [checkboxes]);

  const handleCheckboxChange = (value) => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) =>
        checkbox.value === value
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  return (
    <React.Fragment>
      <div className="filterListOuterDiv">
        {checkboxes.map((elem) => (
          <div className="filterListElements">
            <label key={elem.value}>
              <input
                type="checkbox"
                checked={elem.isChecked}
                onChange={() => handleCheckboxChange(elem.value)}
              />
              {elem.value}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
