import React from 'react'
import Hero from '../components/Hero/Hero';
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import CategoryList from '../components/Category/CategoryList';
import Product from '../components/product/Product';
import FlashDeals from '../components/Home/FlashDeals';
import TredingSearch from '../components/Home/TredingSearch';
 import TopProducts from '../components/Home/TopProducts';
import CategoryFooter from '../components/Home/CategoryFooter';

// import Product from '../components/Product'
const Home = ({products}) => {
  // const productsList = products.results
  return (
    <div className='mt-5 pt-2'>
     <Hero/>
     <div className='container'>
       <img src='/image/claim.png'/>
     </div>
     <section>
       <div className="container">
         <div className={Styles.category}>
         <div className="head">
        
         <h6>Categories</h6>
         </div>
          <div className="d-flex">
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
            <CategoryList/>
          </div>
          </div>
       </div>
     </section>
<FlashDeals/>
<section className={Styles.ecovas}>
        <div className="container">
            <a href="#">
                <img src="/image/ecovacs.png" alt=""/>
            </a>
        </div>
</section>
<TredingSearch/>
<TopProducts/>
 <section className='dialydiscover py-5'>
<div className='container'>
    <div className="popularproduct">
      <div className="section-head d-flex" >
          <h6 className="me-auto">Flash Deals</h6>
          <a href="top.html">See All</a>
      </div>
     </div>
     <div className='product-container d-flex flex-wrap'>

     {/* {productsList?.map((product) => <Product key={product.id} product={product} />)} */}
      
      </div>
    </div>
</section>
<CategoryFooter/>
    </div>
    
     // <div className="products-container">
    //   {productsList?.map((product) => <Product key={product.id} product={product} />)}
    // </div>
   )
}


// export const getServerSideProps = async () => {
//   const res = await fetch(`https://charidik.herokuapp.com/products/product/`)
//   const products = await res.json()
//   console.log(products.results)
//    return {
//     props: { products }
//   }
// }

export default Home;