import React,{useState} from 'react'
import { Rating } from '@mui/material';
import Styles from './productdetails.module.css'
import {BsCartPlus} from 'react-icons/bs';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext';
import ProductTabs from './ProductTabs'
const productDetails = ({product}) => {
  const { feature_image, name, descriptions, New_price, old_price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  
  return (
    <>
    <div className="container mt-3 pt-4">
      <div className="row">
          <div className="col-sm-5">
              <div className="image-area">
                  <img className="img-fluid" src={feature_image} alt="" />
              </div>
          </div>
          <div className="col-sm-7">
                  <div className="details">
                      <h2 className={Styles.pname}>{name}</h2>
                      <div className="d-flex">
                        <div className={Styles.ratingtop}>
                        <Rating  name="read-only" value={4.8} readOnly /> <span>(4.8)</span>
                        </div>
                        <div><a className={Styles.rating}>20 Ratings</a></div>
                        <div><a className={Styles.soldtop}>40 Sold</a></div>
                      </div>
                      <div className={`${Styles.pricebox} mt-3 mb-3`}>
                        <span className={Styles.actualprice}>{old_price}</span>
                        <span className={Styles.price}>{New_price}</span>
                        <span className={Styles.discuntPrice}>45% off</span>
                      </div>
                      <div className={`${Styles.shipping} d-flex`}>
                        <p>Shipping</p>

                        <div className={Styles.stdetails}>
                            <p ><i className="fa-solid fa-plane-departure"></i> Shipping From <span>Dhaka</span></p>
                            <p >Shipping Fee <span> 80TK </span></p>
                        </div>
                      </div>
                      <div className={`${Styles.quantity} d-flex`}>
                          <p>Quantity</p>
                          <div className="qtygroup">
                            <button onClick={decQty} ><AiOutlineMinus/></button>
                            <input type="text" value={qty} />
                            <button onClick={incQty}><AiOutlinePlus/></button>
                          </div>
                           
                      </div>
                     <div className="btnbox d-flex mt-4">
                        <button className='btn btnfirst me-3' onClick={() => onAdd(product, qty)}>
                          <BsCartPlus className='me-1'/> add to cart
                        </button>
                        <button className='btn btnsecond' onClick={handleBuyNow}>
                          Buy Now
                        </button>
                     </div>
                     

                </div>
              </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <ProductTabs/>
      </div>
    </div>
   

     </>
  )
}

export default productDetails