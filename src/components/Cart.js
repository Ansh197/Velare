import React, { useEffect } from 'react'
import img from '../images/OfficeChair3.jpeg'
import { useState } from 'react';
import axios from 'axios';

// const cartProducts = [
//     {
//         imgURL: img,
//         description:'Farina half leather sectional sofa' ,
//         price:'3000 $',
//       },
//       {
//         imgURL: img,
//         description:"Versatile sectional with ample seating",
//         price:'1800 $'
//       },
//       {
//         imgURL: img,
//         description:"Convertible sofa for flexible living",
//         price:'5500 $'
//       },
// ]

export default function Cart(props) {

    const [selectedValue, setSelectedValue] = useState('');
    const [cartProducts,setCartProducts] = useState([]);

    async function fetchProducts(){
        await axios.post('http://localhost:5000/cart',props.userData)
        .then((res)=>{
            console.log(res.data);
            setCartProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchProducts();
    })

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  return (
    <React.Fragment>
        <div className='cartOuterContainer'>
        <div className='cartHeading'>
            <h1>My Cart</h1>
            <h3>{cartProducts.length} Items in your cart</h3>
        </div>
        <div className='CartContainer'>
            <div className='CartList'>
                {cartProducts.map((elem,index)=>
                    <div className='CartListElem'>
                    <img src={elem.image_url} alt={`image-${index}`}/>
                    <div className='CartListContent'>
                        <div className='CL-Description'>
                            <h1>{elem.description}</h1>
                            <h1>{elem.price}</h1>
                        </div>
                        <div className='CL-Remove'>
                            <div className='CL-quantity'>
                                <p>Quantity :</p>
                                <select value={selectedValue} onChange={handleChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </div>
                            <a>Remove</a>
                        </div>
                    </div>
                    </div>
                )}
            </div>
            <div className='CheckoutInfo'>
                <div className='checkoutHeadings'>
                    <h3>Subtotal</h3>
                    <h3>3000 $</h3>
                </div>
                <div className='checkoutHeadings'>
                    <h3>Total Items in Cart</h3>
                    <h3>{cartProducts.length}</h3>
                </div>
                <p>Shipping and taxes calculated at checkout</p>
                <button>Checkout</button>
                <a> or Continue Shopping</a>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}
