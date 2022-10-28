import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = (props) => {
  console.log(props)
  return (
    <div className='footer-container select'>
      <p>2022 Shazly Headphone All Rights reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer