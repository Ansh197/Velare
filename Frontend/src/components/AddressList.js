import React, { useState } from 'react'

export default function AddressList(props) {

    const [selectedOption,setSelectedOption] = useState('');

  return (
    <React.Fragment>
        <form>
        {props.addressData.map((elem)=>
            <div className="radio">
            <label>
              <input
                type="radio"
                value="Male"
                checked={selectedOption == elem.address_id}
                onChange={()=>setSelectedOption(elem.address_id)}
              />
              <div className='addressListInfo'>
                <div className='addressInfo'>
                    <h1>{elem.full_name}</h1>
                    <h3>{elem.street_address}</h3>
                    <h3>{elem.zip}</h3>
                </div>
                <div style={{textAlign:'right'}} className='addressInfo'> 
                    <h1>{elem.phone_number}</h1>
                    <h3>{`${elem.city}, ${elem.province}`}</h3>
                </div>
              </div>
            </label>
          </div>
        )}
      </form>
    </React.Fragment>
  )
}
