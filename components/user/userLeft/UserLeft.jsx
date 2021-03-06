import Image from "next/image";
import React, { useState } from "react";
import styles from "./userLeft.module.css";
import user from "../../../public/image/user/user.webp";
import { BsPencilFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { GoCreditCard } from "react-icons/go";
import { BsCoin } from "react-icons/bs";

const UserLeft = ({ setselected }) => {
  const [myAccountExpanded, setmyAccountExpanded] = useState(true);
  const [notificationExpanded, setnotificationExpanded] = useState(true);

  return (
    <div className={styles.userleft}>
      <div className={`d-flex gap-3 align-items-start ${styles.header}`}>
        <Image
          className="rounded rounded-pill"
          objectFit="cover"
          height={50}
          width={50}
          src={user}
          alt=""
        />
        <div className="mt-1">
          <h6 className="m-0">John Doe</h6>
          <small>
            <BsPencilFill />
          </small>
          <sub className="text-secondary">Edit Profile</sub>
        </div>
      </div>
      <hr />
      <div className={styles.userNav}>
        <div
          className="mb-2"
          onClick={() => {
            setselected("myAccount");
            setmyAccountExpanded(!myAccountExpanded);
          }}
        >
          <div>
            <BiUser className="text-primary h5 m-0" />
            <small className="ms-1 scroll-link" href="#top-content">
              My Account
            </small>
          </div>
        </div>
        {myAccountExpanded && (
          <div className={styles.subNav}>
            <span onClick={() => setselected("myAccount_profile")}>
              Profile
            </span>
            <span onClick={() => setselected("myAccount_banks")}>
              Banks & Cards
            </span>
            <span onClick={() => setselected("myAccount_addresses")}>
              Addresses
            </span>
            <span onClick={() => setselected("myAccount_password")}>
              Chage Password
            </span>
          </div>
        )}
        <div className="mb-2" onClick={() => setselected("myPurchase")}>
          <div>
            <HiOutlineClipboardList className="text-primary  h5 m-0" />
            <small className="ms-1 scroll-link" href="#section-1">
              My Purchase
            </small>
          </div>
        </div>
        <div
          className="mb-2"
          onClick={() => {
            setselected("notification");
            setnotificationExpanded(!notificationExpanded);
          }}
        >
          <div>
            <RiNotification2Line className="text-danger  h5 m-0" />{" "}
            <small className="ms-1 scroll-link" href="#section-2">
              Notification
            </small>
          </div>
        </div>
        {notificationExpanded && (
          <div className={styles.subNav}>
            <span onClick={() => setselected("notification_order")}>
              Order updates
            </span>
            <span onClick={() => setselected("notification_promotions")}>
              Promotions
            </span>
            <span onClick={() => setselected("notification_wallet")}>
              Wallet updates
            </span>
            <span onClick={() => setselected("notification_activities")}>
              Activities
            </span>
            <span onClick={() => setselected("notification_ratings")}>
              Ratings
            </span>
            <span onClick={() => setselected("notification_chardike")}>
              Chardike updates
            </span>
          </div>
        )}
        <div className="mb-2" onClick={() => setselected("myVouchers")}>
          <div>
            <GoCreditCard className="text-success  h5 m-0" />
            <small className="ms-1 scroll-link" href="#section-5">
              My Vouchers
            </small>
          </div>
        </div>
        <div className="mb-2" onClick={() => setselected("myCoins")}>
          <div>
            <BsCoin className="text-warning  h5 m-0" />{" "}
            <small className="ms-1 scroll-link" href="#section-5">
              My Chardike Coins
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLeft;
