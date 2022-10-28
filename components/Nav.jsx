import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai' 


import { useStateContext } from '../Context/StateContext'
import Cart from './Cart'


const Nav = () => {
  const {setShowCart,showCart,totalQuntities}=useStateContext()

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
        PHANOX
        </Link>
      </p>
      {
        showCart?'':
        <button type="button" onClick={()=>setShowCart(true)} className='cart-icon'>
          <AiOutlineShopping/>
          <span className='cart-item-qty'>{totalQuntities}</span>
        </button>
      }
        {showCart&&<Cart/>}
    </div>
  )
}

export default Nav