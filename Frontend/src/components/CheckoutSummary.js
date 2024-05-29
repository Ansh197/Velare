import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CheckoutSummary(props) {

    const [cartProducts,setCartProducts] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);

    async function fetchProducts(){
        await axios.post('http://localhost:5000/cart',props.userData)
        .then((res)=>{
            setCartProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
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

  return (
    <React.Fragment>
        <div className='CartList' style={{width:'100%'}}>
            <h1 style={{marginTop:0}}>Cart Summary</h1>
                {cartProducts.map((elem,index)=>
                    <div className='CartListElem'>
                    <div className='cartlistimageconatainer'>
                        <img style={{width:'100%',height:'7rem'}} src={elem.image_url} alt={`image-${index}`}/>
                    </div>
                    <div className='CartListContent'>
                        <div className='CL-Description'>
                            <h1 style={{fontSize:'1rem'}}>{elem.description}</h1>
                            <h1 style={{fontSize:'1rem'}}>{`${elem.price}`}</h1>
                        </div>
                        <div className='CL-Remove'>
                            <div className='CL-quantity'>
                                <p>Quantity : {elem.quantity}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        <div className='CheckoutInfo' style={{width:'100%',boxSizing:'border-box',marginTop:'2.5rem'}}>
                <div className='checkoutHeadings'>
                    <h3>Subtotal</h3>
                    <h3>{totalPrice} $</h3>
                </div>
                <div className='checkoutHeadings'>
                    <h3>Total Items in Cart</h3>
                    <h3>{cartProducts.length}</h3>
                </div>
                <p>Shipping and taxes calculated at checkout</p>
                <Link to='/checkout'><button>Order Now</button></Link>
                <a> or Continue Shopping</a>
        </div>
    </React.Fragment>
  )
}
