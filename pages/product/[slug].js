import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import Product from "../../components/Product";
import ProductDetail from "../../components/product/ProductDetail";
import { Rating } from "@mui/material";
import ProductCarousel from "../../components/product/ProductCarousel";
import { useStateContext } from "../../context/StateContext";
const ProductDetails = ({ product, products }) => {
  const { feature_image, name, descriptions, New_price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <>
      <div className="product-details mt-5 py-5">
        <ProductDetail product={product} />
      </div>
      <div className="simillar my-5">
        <div className="container">
          <h2>You may also like</h2>
          <div className="row">
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://charidik.herokuapp.com/products/product/");
  const posts = await res.json();
  const postsList = posts.results;

  // Get the paths we want to pre-render based on posts
  const paths = postsList.map((post) => ({
    params: { slug: post.slug.toString() },
  }));
  // console.log(paths)

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://charidik.herokuapp.com/products/product/${params.slug}`
  );
  const resall = await fetch(
    `https://charidik.herokuapp.com/products/product/`
  );
  const product = await res.json();
  const pds = await resall.json();
  // const product = pd.results
  const products = pds.results;
  console.log(product);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
