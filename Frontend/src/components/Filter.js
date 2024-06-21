import React, { useEffect, useState } from 'react'

export default function Filter(props) {

  return (
    <React.Fragment>
        <ul>
            {[...props.filterList].map((elem)=>(<li>{elem}</li>))}
        </ul>
    </React.Fragment>
  )
}
