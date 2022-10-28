import React, { useState } from 'react'
import { client, urlFor } from './../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Product from './../../components/Product';
import { useStateContext } from '../../Context/StateContext';


const productDetails = ({ products, product }) => {


  let { image, name, details, price } = product;
  const [Index, setIndex] = useState(0);

  const { decQty, incQty, qty, onAdd } = useStateContext()

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[Index])}
              className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {
              image?.map((item, i) => (
                <img
                  className={
                    i === Index ? 'small-image selected-image' :
                      "small-image"
                  }
                  key={i}
                  src={urlFor(item)}
                  onMouseEnter={() => setIndex(i)}
                />
              ))
            }
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
          <h4>Details: </h4>
          <p>{details} </p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity: </h3>
            <p className="quantity-desc">
              <span className='minus' onClick={incQty}> <AiOutlineMinus /> </span>
              <span className='num '  > {qty} </span>
              <span className='plus' onClick={decQty}> <AiOutlinePlus /> </span>
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => onAdd(product, qty)} type='button' className='add-to-cart'>Add To Cart</button>
            <button type='button' className='buy-now'>Buy Now</button>

          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {
              products.map((item) => (
                <Product key={item._id} product={item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>


  )
}

export default productDetails


export const getStaticPaths = async () => {
  const query = `*[_type == "product" ]{
    slug{
      current
    }
  }`
  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type ==  "product" && slug.current == '${slug}'][0]`
  const product = await client.fetch(query)

  const productsQuery = `*[_type == "product"]`
  const products = await client.fetch(productsQuery)

  return {
    props: { products, product }
  }
}
// ‘Set your mind ablaze with boAt Rockerz 450 — our slick headphones that offer immersive sound
// quality and add luxury to your sound. Propelled by crystal clear 4Omm dynamic divers, slip into
// an alterate HO immersive audio realty, The soft cornered matte black fish allows for a
// comfortable fi, propagated by plush foam in adaptive and adjustable design. Choose your mode,
// {90 wireless with Bluetooth V42 or connect an aux wire that doesnt cause any drain on the
// ‘300mAh rechargeable lithium battery.
