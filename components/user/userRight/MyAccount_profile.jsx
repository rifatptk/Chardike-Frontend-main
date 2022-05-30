import React from "react";
import styles from "./userRight.module.css";
import user from "../../../public/image/user/user.webp";
import Image from "next/image";

const MyAccount_profile = () => {
  return (
    <div className="ps-3">
      <h3>My Profile</h3>
      <h6 className="mb-5">Manage and protect your account</h6>

      <div className="row">
        <form className={`col-md-8 px-5 ${styles.myAccountForm}`}>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="johndoe"
                className="form-control"
                id="username"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Enter name here"
                className="form-control"
                id="name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                defaultValue="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="text-primary form-control-plaintext"
                id="staticEmail"
                defaultValue="Add"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="shopname" className="col-sm-2 col-form-label">
              Shop Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Enter shop name"
                className="form-control"
                id="shopname"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="gender" className="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              <select type="text" className="form-control" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="birthday" className="col-sm-2 col-form-label">
              Date of birth
            </label>
            <div className="col-sm-10">
              <input type="date" className="form-control" id="birthday" />
            </div>
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Save
          </button>
        </form>
        <div className="col-md-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              className="rounded rounded-pill"
              objectFit="cover"
              src={user}
              width={100}
              height={100}
              alt="user_image"
            />
            <input
              className={`mt-5 form-control ${styles.filepicker}`}
              type="file"
            />
            <small>File size: maximum 1 MB</small>
            <small>File extension: .JPEG, .PNG</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount_profile;
