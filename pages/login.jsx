import React from "react";
import styles from "../styles/login.module.css";
import { ImFacebook } from "react-icons/im";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import Link from "next/link";

const login = () => {
  return (
    <div className={`${styles.login} row`}>
      <div className="col-md-7 h-75 d-flex flex-column justify-content-center align-items-center text-light">
        <h4>Chardike</h4>
        <h2>6.6 - 7.7</h2>
        <h1>Great Chardike Sale</h1>
        <h4>The hottest mid year festival</h4>
        <h6>6th june - 7th july</h6>
      </div>

      <div className={`col-md-5 ${styles.right}`}>
        <div className="bg-light p-4 rounded">
          <form className="d-flex flex-column">
            <h4 className="">Log In</h4>
            <input
              type="text"
              className={styles.input}
              placeholder="Phone number / Username / Email"
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
            />
            <button type="submit" className={styles.btn}>
              LOG IN
            </button>
          </form>
          <div className="d-flex justify-content-between my-2">
            <p className="text-primary">Forgot password</p>
            <p className="text-primary">Forgot password</p>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <div className={styles.line}></div>
            <p className="text-secondary">OR</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.brands}>
            <div>
              <ImFacebook />
            </div>
            <div>
              <BsGoogle />
            </div>
            <div>
              <BsApple />
            </div>
          </div>
          <div className="my-3 text-center">
            <span className="text-secondary">New to chardike?</span>
            <Link href='/signup'>
              <span style={{cursor:'pointer'}} className=" h6 ms-2 text-danger fw-bold">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
