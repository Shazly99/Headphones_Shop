import React from "react";
import {Cart,HeroBanner,FooterBanner} from "../components";
import { client } from './../lib/client';
import Product from './../components/Product';

const index = ({products , bannerData}) => {
  // console.log(bannerData  )
  return (
    <>
    <HeroBanner bannerData={bannerData.length && bannerData[0]}/> 
    <div className="products-heading">
      <h2>Beset Selling Products</h2>
      <p>Speakers of many variation</p>
    </div>
    <div className="products-container">
      {
        products.map((product,index)=><h3 key={index}>{product.name}</h3>)
      }
    </div>
    <FooterBanner/>
    </>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const query='*[_type ==  "product"]'
  const products =await client.fetch(query )

  const bannerQuery='*[_type ==  "banner"]'
  const bannerData =await client.fetch(bannerQuery)
  return {
    props: {products,bannerData}
  }
}
