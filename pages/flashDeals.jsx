import React from "react";
import styles from "../styles/flashDeals.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sale from "../components/Sale/Sale";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className="">
        <span className="bg-dark text-light rounded p-1">{hours}</span>:
        <span className="bg-dark text-light rounded p-1">{minutes}</span>:
        <span className="bg-dark text-light rounded p-1">{seconds}</span>
      </span>
    );
  }
};

const flashDeals = () => {
  return (
    <div className={`container ${styles.flashDeals}`}>
      <div className="">
        <p className="h5 text-danger d-flex align-items-center justify-content-center">
          <strong className="mx-1"> FLASH </strong> DEALS
          <AiOutlineClockCircle className="h3 mx-1 text-warning" />
          <small className="text-dark mx-1">Ends in</small>
          <Countdown date={Date.now() + 1000000000} renderer={renderer} />
        </p>
      </div>
      <div
        className={`${styles.banner} p-5 text-light d-flex align-items-center`}
      >
        <h1 className="w-25 text-center">Chardike Flash Deal</h1>
        <div className="w-75 text-center">
          <h2>Grab your dreams like never before</h2>
          <button className="btn btn-warning">Shop now</button>
        </div>
      </div>

      <Tabs>
        <TabList className={styles.tablist}>
          <Tab className={styles.tab}>
            <p>12:00</p>
            <p>Ongoing</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>14:00</p>
            <p>Coming soon</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>16:00</p>
            <p>Coming soon</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>18:00</p>
            <p>Coming soon</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>20:00</p>
            <p>Coming soon</p>
          </Tab>
        </TabList>

        <TabPanel>
          <Sale />
        </TabPanel>
        <TabPanel>
          <Sale />
        </TabPanel>
        <TabPanel>
          <Sale />
        </TabPanel>
        <TabPanel>
          <Sale />
        </TabPanel>
        <TabPanel>
          <Sale />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default flashDeals;
