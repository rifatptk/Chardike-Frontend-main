import React from "react";
import styles from "./sale.module.css";
import Image from "next/image";
import product from "../../public/image/category/c1.png";
import product2 from "../../public/image/category/c2.jpg";
import product3 from "../../public/image/category/c3.png";
import product4 from "../../public/image/category/c4.png";
import product5 from "../../public/image/category/c5.png";
import { Nav, Row, Tab } from "react-bootstrap";

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
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="$0.10 Deals">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Electronics & appliences">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Home & Lifestyle">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Fashion & accessories">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Health & beauty">
            <div className={styles.products}>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product5} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product2} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product4} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
                </div>
              </div>
              <div className={`${styles.product}`}>
                <div className={"bg-warning text-light " + styles.tip}>
                  <p className="m-0">63%</p>
                  <p className="m-0">OFF</p>
                </div>
                <Image src={product3} width={300} height={300} alt="image" />
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
                  <div className={`${styles.progress} progress`}>
                    <div
                      className={`${styles.progressbar} progress-bar`}
                      role="progressbar"
                      style={{width: "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25 SOLD
                    </div>
                  </div>
                  <button className={`btn mt-3 ${styles.btnTomato}`}>Buy Now</button>
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
