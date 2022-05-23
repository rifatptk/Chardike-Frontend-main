import React, { useState } from "react";
import styles from "./categories.module.css";
import { FaWarehouse, FaFilter } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Image from "next/image";
import product from "../../public/image/category/c1.png";
import product2 from "../../public/image/category/c2.jpg";
import product3 from "../../public/image/category/c3.png";
import product4 from "../../public/image/category/c4.png";
import product5 from "../../public/image/category/c5.png";

const Categories = () => {
  const [value, setValue] = React.useState(2);

  return (
    <section className={styles.allCatagories}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles.mallDownTabsLeft}>
              <h6 style={{ color: "#555" }}>
                <FaWarehouse />
                <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  Catagories
                </span>
              </h6>
              <p style={{ color: "tomato", fontWeight: "bold" }}>
                <AiFillCheckSquare style={{ marginRight: "5px" }} />
                All Catagories
              </p>
              <ul className={styles.allCategoriesList}>
                <li>
                  <a href="#">Must have beauty sets</a>
                </li>
                <li>
                  <a href="#">Retinol</a>
                </li>
                <li>
                  <a href="#">Must have sceencare</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Green Tea</a>
                </li>
                <li>
                  <a href="#">Black Tea</a>
                </li>
                <li>
                  <a href="#">Volcanic</a>
                </li>
                <li>
                  <a href="#">Cherry Blossom</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Green Tea</a>
                </li>
                <li>
                  <a href="#">Black Tea</a>
                </li>
                <li>
                  <a href="#">Volcanic</a>
                </li>
                <li>
                  <a href="#">Cherry Blossom</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Green Tea</a>
                </li>
                <li>
                  <a href="#">Black Tea</a>
                </li>
                <li>
                  <a href="#">Volcanic</a>
                </li>
              </ul>
            </div>
            <div className={styles.left}>
              <div className={styles.header}>
                <h6>
                  <FaFilter />
                  SEARCH FILTER
                </h6>
              </div>
              <div className={styles.contentArea}>
                <div className={styles.heading}>
                  <p>By Category</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Mask(67k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Jewellery &amp; Accessories(64k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Home &amp; Living(59k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Health &amp; Wellness(53k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Sports &amp; Outdoors(14k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Womens Hair Care(12k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Bath &amp; Body(12k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Beaut Devices &amp; Tools(9k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Eye Carae(8k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Women Apparel(6k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Travel &amp; Luggage(5k+)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Hobbies &amp; Books(6k+)</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Shipped From</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Domestic</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Overseas</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Shipping Option</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Chardike Xpress</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Chardike Xpress Warehouse</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Ninja Van (Home Delevery)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Ninja Van (Self Collection)</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">UrbanFox</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Overseas: Standard Express</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Overseas: Standard Economy</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Overseas: Sea Shipping</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Overseas: Korea</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Singpost Normal Mail</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Seller Store Pick Up</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Speedpost Economy</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">J&amp;T Express</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Brand</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">airdays</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">MICO</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">HELICON-TEX</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Taiwan Collection</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Eau Thermale Avene</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">3M</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Innisfree</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Malaysia Collection</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Assure</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Wistech</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">IRIS Healthcare</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">LEHACO</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">MEDIHEAL</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Skater</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">MIIMA</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Mamonde</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">3P</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Dr DuoDuo</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Callie</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">BMC</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Price Range</p>
                </div>
                <div className="d-flex gap-2">
                  <input type="text" className="w-50" id placeholder="$ MIN" />
                  <input type="text" className="w-50" id placeholder=" $ MAX" />
                </div>
                <button
                  href="#"
                  className={`btn ${styles.btnTomato} w-100 mt-2`}
                >
                  APPLY
                </button>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Rating</p>
                </div>
                <Box
                  className="d-flex align-items-center"
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />{" "}
                  <sub> & up</sub>
                </Box>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Shop Type</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Chardike Mall</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Supermarket</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Chardike Preferred</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Conditions</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">New</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Used</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className={styles.heading}>
                  <p>Service &amp; Promotion</p>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">4.4 Deals</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Cashback</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Free Shipping</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Big Brands Discounts</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">With Discount</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Ready Stock</a>
                  </label>
                </div>
                <div className={styles.formCheck}>
                  <input type="checkbox" defaultValue="mask" id />
                  <label
                    className={styles.formCheckLabel}
                    htmlFor="flexCheckDefault"
                  >
                    <a href="#">Wholesale</a>
                  </label>
                </div>
              </div>
              <div className="content-area">
                <div className="last-btn">
                  <a href="#" className={`btn ${styles.btnTomato}`}>
                    CLEAR ALL
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="popular">
              <Row>
                <Nav variant="pills" className="mb-3 ms-0 p-2">
                  <Nav.Item>
                    <Nav.Link className={styles.tablink} eventKey="popular">
                      Popular
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className={styles.tablink} eventKey="latest">
                      Latest
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className={styles.tablink} eventKey="top sales">
                      Top sales
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Price</option>
                      <option value="1">Price: Low to high</option>
                      <option value="2">Price: High to low</option>
                    </select>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                  <span className="text-secondary">1/20</span>
                    <div className="btn btn-sm btn-outline-secondary mx-2">
                      <BiLeftArrow />
                    </div>
                    <div className="btn btn-sm btn-outline-danger">
                      <BiRightArrow />
                    </div>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="popular">
                    <div className={styles.products}>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>
                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-warning text-light " + styles.tip}
                        >
                          Recommended
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">HD monitor</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-warning text-warning ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-success text-light " + styles.tip}
                        >
                          Mall
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-primary text-primary ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Led tv</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fresh fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>

                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>
                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-warning text-light " + styles.tip}
                        >
                          Recommended
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">HD monitor</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-warning text-warning ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-success text-light " + styles.tip}
                        >
                          Mall
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-primary text-primary ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Led tv</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fresh fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="latest">
                    <div className={styles.products}>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-warning text-light " + styles.tip}
                        >
                          Recommended
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">HD monitor</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-warning text-warning ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>
                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>

                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-success text-light " + styles.tip}
                        >
                          Mall
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-primary text-primary ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Led tv</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fresh fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>

                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>
                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-warning text-light " + styles.tip}
                        >
                          Recommended
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">HD monitor</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-warning text-warning ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-success text-light " + styles.tip}
                        >
                          Mall
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-primary text-primary ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Led tv</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fresh fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="top sales">
                    <div className={styles.products}>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-success text-light " + styles.tip}
                        >
                          Mall
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-primary text-primary ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>
                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-warning text-light " + styles.tip}
                        >
                          Recommended
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">HD monitor</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-warning text-warning ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>

                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Led tv</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fresh fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>

                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>
                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-warning text-light " + styles.tip}
                        >
                          Recommended
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">HD monitor</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-warning text-warning ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-success text-light " + styles.tip}
                        >
                          Mall
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-primary text-primary ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small
                          className={"bg-primary text-light " + styles.tip}
                        >
                          Discounted
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <strike className="text-secondary">
                              <small>$</small>22.90
                            </strike>{" "}
                            - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product3}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Led tv</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Womens dress</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product5}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Ketley</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product4}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Fresh fruits</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                      <div className={`${styles.product}`}>
                        <small className={"bg-danger text-light " + styles.tip}>
                          Popular
                        </small>
                        <Image
                          src={product2}
                          width={200}
                          height={200}
                          alt="image"
                        />
                        <div className={`p-2 ${styles.productDesc}`}>
                          <p className="text-secondary">Huawei p-50</p>
                          <sup className="border border-danger text-danger px-2">
                            Free gift
                          </sup>
                          <sup className="border border-success text-success ms-1 px-2">
                            Free shipping
                          </sup>

                          <h3 className="text-danger h5">
                            <small>$</small>12.90 - <small>$</small>16.90
                          </h3>
                          <div className="d-flex align-items-center">
                            <Rating defaultValue={2.5} precision={0.5} />
                            <small className="text-secondary">5.8k sold</small>
                          </div>
                          <sub>Made in china</sub>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
