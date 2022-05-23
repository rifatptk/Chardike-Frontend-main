import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext} from '../../context/StateContext';
 import Logo from '/public/logo/chardike-1-02.png'
import {FaSearch} from 'react-icons/fa'
import Cart from '../Cart';

const HeaderMiddle = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="nav-middle d-flex">
        <div className="logo">
            <Link href="/">
                <a >
               <Image src={Logo}/>
                </a>
            </Link>
           
        </div>

        <div className="search">
            <input  type="text" placeholder="Ecovacs Super Brand Day: Up to 60% off + $100 off voucher"/>
            <a href="#" className="btn"><FaSearch/></a>
            <ul className="link-area d-flex">
                <li><a href="#">Skin Care</a></li>
                <li><a href="#">Water Bottle</a></li>
                <li><a href="#">Apple Watch Strap</a></li>
                <li><a href="#">Laptop Stand</a></li>
                <li><a href="#">iPhone 13 Pro Max Case</a></li>
                <li><a href="#">Airpods Pro Case</a></li>
                <li><a href="#">iPhone 13</a></li>
                <li><a href="#">Tote Bag</a></li>
            </ul>
        </div>
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShopping className="text-white"/>
                <span className="cart-item-qty bg-white text-black">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}

    </div>
  )
}

export default HeaderMiddle