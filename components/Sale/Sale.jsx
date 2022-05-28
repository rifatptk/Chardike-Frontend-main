import React from "react";
// import styles from "./sale.module.css";
import Image from "next/image";
import product from "../../public/image/category/c1.png";
import product2 from "../../public/image/category/c2.jpg";
import product3 from "../../public/image/category/c3.png";
import product4 from "../../public/image/category/c4.png";
import product5 from "../../public/image/category/c5.png";
import { Nav, Row, Tab } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Rating } from "@mui/material";
import styles from "../Category/categories.module.css";

const Sale = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Top Picks">
      <Row>
        <Nav
          variant="pills"
          style={{ background: "#eee" }}
          className="mb-3 ms-0 p-3 align-items-center "
        >
          <Nav.Item>
            <Nav.Link className={styles.tablink} eventKey="Top Picks">
              Top Picks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.tablink} eventKey="$0.10 Deals">
              $0.10 Deals
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={styles.tablink}
              eventKey="Electronics & appliences"
            >
              Electronics & appliences
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.tablink} eventKey="Home & Lifestyle">
              Home & Lifestyle
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={styles.tablink}
              eventKey="Fashion & accessories"
            >
              Fashion & accessories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.tablink} eventKey="Health & beauty">
              Health & beauty
            </Nav.Link>
          </Nav.Item>

          {/* <Nav.Item className="ms-auto">
            <select
              style={{ borderRadius: "2px" }}
              className="form-select py-1"
              aria-label="Default select example"
            >
              <option selected>More</option>
              <option value="1">Price: Low to high</option>
              <option value="2">Price: High to low</option>
            </select>
          </Nav.Item> */}
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="Top Picks">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <small className={"bg-danger text-light " + styles.tip}>
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
          <Tab.Pane eventKey="$0.10 Deals">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
          <Tab.Pane eventKey="Electronics & appliences">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
          <Tab.Pane eventKey="Home & Lifestyle">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
          <Tab.Pane eventKey="Fashion & accessories">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
          <Tab.Pane eventKey="Health & beauty">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <small className={"bg-danger text-light " + styles.tip}>
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                <small className={"bg-warning text-light " + styles.tip}>
                  Recommended
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                <small className={"bg-success text-light " + styles.tip}>
                  Mall
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                <small className={"bg-primary text-light " + styles.tip}>
                  Discounted
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product3} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product5} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product4} width={200} height={200} alt="image" />
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
                  Top Picks
                </small>
                <Image src={product2} width={200} height={200} alt="image" />
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
  );
};

export default Sale;
