import React, {useRef, useState} from 'react'
import { Modal,Header,Title,Body,Button } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext';

import Styles from './productmodel.module.css'
 export default function ProductModal({product}) {
    const { feature_image, name, descriptions, New_price, old_price,category_name } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  
    const handleBuyNow = () => {
      onAdd(product, qty);
  
      setShowCart(true);
    }
  
    
    return (
        
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={`${Styles.promodalbody} d-flex`}>
            <div className="col-md-6">
                <img className='img-fluid p-4' src={feature_image} alt=""/>
            </div>
            <div className="col-md-6">
                <h2>{name}</h2>
                <h6>Cosrx</h6>
                <p className={Styles.detailsp}>{descriptions} </p>
                <div className={`${Styles.twoarea} d-flex`}>
                    <div className="me-auto">
                        <p>Brand</p>
                    </div>
                    <p>{category_name}

                    </p>
                </div>	
                <div className={`${Styles.check} d-flex`}>
                    <i className="fa-solid fa-check"></i>
                    <p>5 in Stock</p>
                </div>

                <div className={Styles.quentity}>
                    <div className="qtygroup">
                        <button onClick={decQty} ><AiOutlineMinus/></button>
                        <input type="text" value={qty} />
                        <button onClick={incQty}><AiOutlinePlus/></button>
                    </div>                 
                </div>

                <div className={Styles.detailsbtn}>
                    <a href="product1.html" className={Styles.btn}>View More</a>
                    <a href="cart.html" className={Styles.btn}>Add to Cart</a>
                </div>

                <div className={Styles.lastdetailsarea}>
                    <div className={`${Styles.first} d-flex`}>
                        <p>SKU:</p>
                        <span>8809606851083</span>
                    </div>
                    <div className="d-flex">
                        <p>Categories:</p>
                        <span>Cleansing Oil, Skin Care</span>
                    </div>

                    <div className="d-flex">
                        <p>Tags:</p>
                        <span>hydrates, moisturizing, radiant skin, removes all makeup</span>
                    </div>


                    <div className={`${Styles.icon} d-flex`}>
                        <p>Share :</p>
                        
                         <Link href="/fb">
                         <a><BsFacebook/></a>
                         </Link>
                         <Link href="/fb">
                         <a><BsInstagram/></a>
                         
                         </Link>
                         
                         
                    </div>

                    
                </div>
            
            </div>
        </div>
        </Modal.Body>
      </Modal>
    );
  }
  