import React, { useRef } from 'react'
import { useStateContext } from '../Context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'next/link';
import { urlFor } from '../lib/client';
import toast from "react-hot-toast";
import { TiDeleteOutline } from 'react-icons/ti';


const Cart = () => {
  let cardRef = useRef()
  let { totalPrice, totalQuntities, cartItems, setShowCart, toggleCartItemQuanitity ,onRemove} = useStateContext()
  return (
    <div className='cart-wrapper'>
      <div className="cart-container">
        <button
          type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>{totalQuntities} items</span>
        </button>

        {
          cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={150} />
              <h3>Your Shopping bag is empty</h3>
              <button
                onClick={() => setShowCart(false)}
                className='btn'>
                Continue Shopping
              </button>
            </div>

          )
        }
        <div className='product-container'>
          {
            cartItems.length >= 1 && cartItems.map((item, index) => (
              <div className='product ' key={item._id}>
                <img src={urlFor(item?.image[1])} className="cart-product-image" />
                <div className='item-desc'>
                  <div className='flex top'>
                    {console.log(item)}

                    <h5>{item.name}</h5>
                    <h5>${item.price}</h5>
                  </div>
                  <div className='flex bottom'>
                    <p className="quantity-desc">
                      <span className='minus' onClick={() => toggleCartItemQuanitity(item._id, 'dec')} > <AiOutlineMinus /> </span>
                      <span className='num '  > {item.quantity} </span>
                      <span className='plus' onClick={() => toggleCartItemQuanitity(item._id, 'inc')}> <AiOutlinePlus /> </span>
                    </p>
                    <button className='remove-item' onClick={()=>onRemove(item)}  >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {
          cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>SubTotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className='btn-container'>
                <button className='btn'>Pay Eith stripe</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart