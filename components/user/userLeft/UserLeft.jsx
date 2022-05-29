import Image from "next/image";
import React from "react";
import styles from "./userLeft.module.css";
import user from "../../../public/image/user/user.webp";
import { BsPencilFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { GoCreditCard } from "react-icons/go";
import { BsCoin } from "react-icons/bs";


const UserLeft = () => {
  const userNav = [
    {
      title: "My Account",
      icon: BiUser,
      childrens: [
        {
          title: "Profile",
        },
        {
          title: "Banks & Cards",
        },
        {
          title: "Addresses",
        },
        {
          title: "Change Password",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="d-flex gap-3 align-items-start">
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
      <div className="userNav">
      <ul className="list-unstyled menu-elements fw-bold">
        <li className="mb-2">
        <BiUser className="text-primary h5 m-0" /><small className="ms-1 scroll-link" href="#top-content"> My Account</small>
        </li >
        <li className="mb-2">
        <HiOutlineClipboardList className="text-primary  h5 m-0"/> <small className="ms-1 scroll-link" href="#section-1">My Purchase</small>
        </li>
        <li className="mb-2">
        <RiNotification2Line className="text-danger  h5 m-0"/> <small className="ms-1 scroll-link" href="#section-2">Notification</small>
        </li>
        <li className="mb-2">
        <GoCreditCard className="text-success  h5 m-0"/> <small className="ms-1 scroll-link" href="#section-5"> My Vouchers</small>
        </li>
        <li className="mb-2">
        <BsCoin className="text-warning  h5 m-0"/> <small className="ms-1 scroll-link" href="#section-5"> My Chardike Coins</small>
        </li>
        
        
    </ul>
      </div>
    </div>
  );
};

export default UserLeft;
