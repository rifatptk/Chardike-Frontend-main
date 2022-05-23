import React from 'react'
import FlashItem from '../flashdeal/FlashItem'
const FlashDeals = ({products}) => {
  return (
    <section className='flashdeals py-5'>
        <div className="container">
            <div className="section-head d-flex" >
                <h6 className="me-auto">Flash Deals</h6>
                <a href="top.html">See All</a>
            </div>
            <div className="row">
             <FlashItem/>
            </div>
        </div>
    </section> 
  )
}

export default FlashDeals