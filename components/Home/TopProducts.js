import React from 'react'
 import TopProduct from '../product/TopProduct'
const TopProducts = () => {
  return (
    <section className='flashdeals py-5'>
        <div className="container">
            <div className="section-head d-flex" >
                <h6 className="me-auto">Top Product</h6>
                <a href="top.html">See All</a>
            </div>
            <div className="row">
                <TopProduct/>
                <TopProduct/>
                <TopProduct/>
                <TopProduct/>
                <TopProduct/>
                <TopProduct/>
            </div>
        </div>
    </section> 
  )
}

export default TopProducts