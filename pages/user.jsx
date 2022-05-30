import React, { useState } from "react";
import UserRight from "../components/user/userRight/UserRight";
import styles from "../styles/user.module.css";
import UserLeft from "../components/user/userLeft/UserLeft";

const User = () => {
  const [selected, setselected] = useState("myAccount");
  console.log(selected);

  return (
    <div className={`${styles.user} row`}>
      {/* left */}
      <div className="col-md-2">
        <UserLeft setselected={setselected} />
      </div>
      {/* right */}
      <div className="col-md-10">
        <UserRight selected={selected} />
      </div>
    </div>
  );
};

export default User;
