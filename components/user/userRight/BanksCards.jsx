import React from "react";
import styles from "./userRight.module.css";

const BanksCards = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>QuickBuy</h1>
        <button className={styles.btnTomato}>Add Account</button>
      </div>
      <div></div>
    </div>
  );
};

export default BanksCards;
