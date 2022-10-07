import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
  
const HeroBanner = ({bannerData}) => {
  console.log(bannerData)
  let {buttonText,smallText,midText,product,saleTime,image,discount,desc,largeText1,largeText2 }=bannerData
  return (
    <div className='hero-banner-container'>
      <div>
        <div className="beats-solo">
          <p>{smallText}</p>
          <h3>{ midText}</h3>
          <h1 className='select'>{largeText1}</h1>
          <img src={urlFor(image)} alt="headphones" className='hero-banner-image' /> 
          <div>
            <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
            </Link>
            <div className='desc'>
              <h5  className='select'>Description</h5>
              <p  className='select'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner