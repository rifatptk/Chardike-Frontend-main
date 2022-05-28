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
        <span className="bg-dark text-light rounded p-1">{minutes}:</span>:
        <span className="bg-dark text-light rounded p-1">{seconds}</span>
      </span>
    );
  }
};

const flashDeals = () => {
  const timeClickHandler = (index) => {};

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
      <div className={styles.banner}></div>
      {/* <div className={styles.times}>
        {times.map((time, index) => (
          <div onClick={()=>timeClickHandler(index)} key={index} className={`text-center bg-secondary text-light`}>
            <h3>{time.time}</h3>
            <p>{time.ongoing ? "Ongoing":"Coming soon"}</p>
          </div>
        ))}
      </div> */}
      <Tabs>
        <TabList className={styles.tablist}>
          <Tab className={styles.tab}>
            <p>12:00</p>
            <p>Ongoing</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>12:00</p>
            <p>Coming soon</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>12:00</p>
            <p>Coming soon</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>12:00</p>
            <p>Coming soon</p>
          </Tab>
          <Tab className={styles.tab}>
            <p>12:00</p>
            <p>Coming soon</p>
          </Tab>
        </TabList>

        <TabPanel>
          <Sale />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default flashDeals;
