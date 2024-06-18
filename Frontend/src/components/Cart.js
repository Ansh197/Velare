import React, { useEffect } from 'react'
import img from '../images/OfficeChair3.jpeg'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;


export default function Cart(props) {

    const [cartProducts,setCartProducts] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);

    async function fetchProducts(){
        await axios.post('http://localhost:5000/cart/products',props.userData)
        .then((res)=>{
            setCartProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    async function removeFromCart(index){
        console.log('remove clicked');
        await axios.post('http://localhost:5000/cart/remove',cartProducts[index]);
        fetchProducts();
    }

    useEffect(()=>{
        fetchProducts();
        var curPrice = 0;
        for(var i=0;i<cartProducts.length;++i)
        {
            curPrice+= (cartProducts[i].quantity * cartProducts[i].price)
        }
        setTotalPrice(curPrice);
    },[cartProducts])

    const handleChange = async (event,index) => {
        let tempArray = [...cartProducts];
        tempArray[index].quantity = event.target.value;
        console.log(tempArray[index])
        await axios.post('http://localhost:5000/cart/changeQuantity',tempArray[index]);
        setCartProducts(tempArray);
        // setCartProducts(tempArray);
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
                    <div className='cartlistimageconatainer'>
                        <img src={elem.image_url} alt={`image-${index}`}/>
                    </div>
                    <div className='CartListContent'>
                        <div className='CL-Description'>
                            <h1>{elem.description}</h1>
                            <h1>{`${elem.price}`}</h1>
                        </div>
                        <div className='CL-Remove'>
                            <div className='CL-quantity'>
                                <p>Quantity :</p>
                                <select key={index} value={elem.quantity} onChange={(event)=>handleChange(event,index)}>
                                    <option value={1}>{1}</option>
                                    <option value={2}>{2}</option>
                                    <option value={3}>{3}</option>
                                </select>
                            </div>
                            <a onClick={()=>removeFromCart(index)}>Remove</a>
                        </div>
                    </div>
                    </div>
                )}
            </div>
            <div className='CheckoutInfo'>
                <div className='checkoutHeadings'>
                    <h3>Subtotal</h3>
                    <h3>{totalPrice} $</h3>
                </div>
                <div className='checkoutHeadings'>
                    <h3>Total Items in Cart</h3>
                    <h3>{cartProducts.length}</h3>
                </div>
                <p>Shipping and taxes calculated at checkout</p>
                <Link to='/checkout'><button>Checkout</button></Link>
                <a> or Continue Shopping</a>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}
