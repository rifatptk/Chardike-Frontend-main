import React,{useState} from 'react'
import Styles from './product.module.css'
import {AiFillHeart, AiFillEye} from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import ProductModal from './ProductModal';
import { useStateContext } from '../../context/StateContext';
import Link from 'next/link'
 

const Product = ({product}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();


  return (

   <div className={Styles.sproduct}>
        <div className={`${Styles.productcard} card`}>
            <div className={Styles.imgBox}>
                    <Link href={`/product/${product.slug}`}> 
                    <a>
                        <img src={product.feature_image} alt=""/>
                    </a>
                    </Link>

                <ul className={Styles.action}>
                    <li>
                        <AiFillHeart/>
                         <span>Add to love</span>
                    </li>
                    <li>
                        <a onClick={() => onAdd(product, qty)}><FaShoppingCart/></a>
                        <span>Add to cart</span>
                    </li>
                    <li>
                        <a onClick={() => setModalShow(true)}>
                            <AiFillEye/>
                            
                        </a>

                         <span>View Details</span>
                    </li>
                </ul>
            </div>
            <div className={Styles.content}>
                <div className={Styles.productName}>
                 <Link href={`/product/${product.slug}`}> 
                        <h3><a>{product.name}</a></h3>
                </Link>
                    </div>
                    <div className={`${Styles.last} d-flex`}>
                         <p className="me-auto price">৳ <del>{product.old_price}</del>  {product.New_price}</p>
                        <p>12.9k sold</p>
                </div>
                </div>

                <div className={Styles.findsimilar}>
                    <a href="#">Find Similar</a>
                </div>
        </div>
        
       <ProductModal product={product}  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>
  )
}

export default Product