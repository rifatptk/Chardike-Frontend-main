import React from "react";
import MyAccount_profile from "./MyAccount_profile";
import styles from "./userRight.module.css";

const UserRight = ({ selected }) => {
  return (
    <div className={styles.userright}>
      {selected === "myAccount" && <MyAccount_profile />}
      {selected === "myAccount_profile" && <MyAccount_profile />}
      {selected === "myAccount_banks" && <h1>Banks & Cards</h1>}
      {selected === "myAccount_addresses" && <h1>Addresses</h1>}
      {selected === "myAccount_password" && <h1>Password</h1>}
      {selected === "myPurchase" && <h1>my purchase</h1>}
      {selected === "notification" && <h1>notification</h1>}
      {selected === "notification_order" && <h1>order updates</h1>}
      {selected === "notification_promotions" && <h1>promotions</h1>}
      {selected === "notification_wallet" && <h1>Wallet updates</h1>}
      {selected === "notification_activities" && <h1>Activities</h1>}
      {selected === "notification_ratings" && <h1>Ratings</h1>}
      {selected === "notification_chardike" && <h1>chardike updates</h1>}
      {selected === "myVouchers" && <h1>my vouchers</h1>}
      {selected === "myCoins" && <h1>my coins</h1>}
    </div>
  );
};

export default UserRight;
