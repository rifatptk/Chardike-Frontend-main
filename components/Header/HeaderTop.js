import Link from 'next/link'
import React from 'react'

const HeaderTop = () => {
  return (
    <div className="row">
                     
                <div className="nav-head d-flex">
                    <div className="left me-auto d-flex">
                        <ul className="d-flex">
                            <li><a href="#">Seller Centre</a></li>
                            <li><a href="#">Sell on Shopee</a></li>
                            <li><a href="download.html">Download</a></li>
                        </ul>
                        <div className="icon d-flex">
                            <p>Follow us on</p>
                            <a href="https://www.facebook.com/chardikebd" target="__blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/chardikebd" target="__blank"><i className="fa-brands fa-instagram"></i></a>

                        </div>
                    </div>
                    <div className="right">
                        <ul className="d-flex">
                            <li>
                                <a href="profile.html">
                                    <i className="fa-solid fa-bell"></i>
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="help.html">
                                    <i className="fa-solid fa-question"></i>
                                    <span>Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-solid fa-globe"></i>
                                    <span>English <i className="fa-solid fa-angle-down"></i></span>
                                </a>

                                <div className="sub-menu shadow">
                                    <ul>
                                        <li><a className="en" href="#">English</a></li>
                                        <li><a href="#">Bangla</a></li>
                                        <li><a href="#">Hindi</a></li>
                                    </ul>
                                </div>
                               
                            </li>
                            <li><Link className="my-border" href="/signup">Sign Up</Link></li>
                            <li><Link href="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
    </div>

  )
}

export default HeaderTop