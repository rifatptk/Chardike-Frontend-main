import React from 'react'
import {FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
 import {GrAppleAppStore,GrGooglePlay } from 'react-icons/gr'



import Link from 'next/link'
const Footer = () => {
  return (
    <>
         <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="fsingle">
                <div className="fhead">
                  <h4>About Chardike</h4>
                </div>
                <div className="fcontent">
                   <img src="/chardike.png" alt="" />
                   <div className="social">
                     <Link href="https://www.facebook.com/chardikebd/">
                     <a><FaFacebookF/></a>
                     </Link>
                     <Link href="https://www.instagram.com/koreanbeautybd/">
                     <a><FaInstagram/></a>
                     </Link>
                     <Link href="https://www.youtube.com/channel/UCBOh5KsqyuTSLoWpzjN4oJQ">
                     <a><FaYoutube/></a>
                     </Link>
                   </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="fsingle">
                <div className="fhead">
                  <h4>Customer Service</h4>
                </div>
                <div className="fcontent">
                  <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">How to Buy</a></li>
                    <li><a href="#">Payment Method</a></li>
                    <li><a href="#">Chardike Coins</a></li>
                    <li><a href="#">Chardike Marchent</a></li>
                    <li><a href="#">Return & Refund</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="fsingle">
                <div className="fhead">
                  <h4>Customer Service</h4>
                </div>
                <div className="fcontent">
                  <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">How to Buy</a></li>
                    <li><a href="#">Payment Method</a></li>
                    <li><a href="#">Chardike Coins</a></li>
                    <li><a href="#">Chardike Marchent</a></li>
                    <li><a href="#">Return & Refund</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="fsingle">
                <div className="fhead">
                  <h4>Download Chardike App</h4>
                </div>
                <div className="fcontent">
                   <img src="/chardikeqr.png" alt="" />
                   <div className="social">
                  <a href=""><GrAppleAppStore/></a>                       
                  <a href=""><GrGooglePlay/></a>                       
                   </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
 
   
       
    </>
  )
}

export default Footer