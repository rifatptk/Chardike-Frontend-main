import React from 'react';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
      <Toaster />

        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp