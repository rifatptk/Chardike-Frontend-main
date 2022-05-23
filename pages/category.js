import React from "react";
import BestSellCollection from "../components/Category/BestSellCollection";
import CategorySlider from "../components/Category/CategorySlider";
import { AiOutlineBars } from "react-icons/ai";
import Categories from "../components/Category/Categories";
const Category = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="container mt-3">
        <CategorySlider />
      </div>
      <BestSellCollection />
      <section>
        <div className="container">
          <div className="topbar">
            <div className="col-md-3">
              <AiOutlineBars /> <span>All Categories</span>
            </div>
            <div className="col-md-9">
              <div className="filterbox">
                <span>Short By</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9"></div>
          </div>
        </div>
      </section>
      <Categories />
    </div>
  );
};

export default Category;
