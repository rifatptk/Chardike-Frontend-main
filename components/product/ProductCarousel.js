import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation } from "swiper";
import Styles from './product.module.css'
import {AiFillHeart, AiFillEye} from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import ProductModal from './ProductModal';
import { useStateContext } from '../../context/StateContext';
import Link from 'next/link'

const ProductCarousel = ({products}) => {
  const [modalShow, setModalShow] = useState(false);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  return (
    <>
     
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      slidesPerGroup={5}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
    {products.map((product) => (
        <SwiperSlide  key={product.id}>
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
                  <Link href={`/product/${product.id}`}> 
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
    </SwiperSlide>
     ))}
    </Swiper>
  </>
  )
}

export default ProductCarousel
 