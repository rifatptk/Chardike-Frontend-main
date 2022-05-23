import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Chardike Web</title>
      </Head>
        <Header/>
       <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <div className="footer-copyright">
        <div className="container">
         <div className="row">
         <div className="footerbottom d-flex py-2 justify-content-between">
            <p> &copy; 2022 Chardike All Right Reserved</p>
            <img src="/payments.png" alt="" />
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Layout