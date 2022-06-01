import React from "react";
import styles from "./userRight.module.css";

const BanksCards = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5>QuickBuy</h5>
        <button className={styles.btnTomato}>Add Account</button>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "30vh" }}
      >
        <h5>You have no added account yet</h5>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h5>Credit / Debit Card</h5>
        <button className={styles.btnTomato}>Add New Card</button>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "30vh" }}
      >
        <h5>You have no added cards yet</h5>
      </div>
    </div>
  );
};

export default BanksCards;
