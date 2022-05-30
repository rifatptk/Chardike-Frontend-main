import React from "react";

const UserRight = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <h6>Manage and protect your account</h6>
      <form>
        <div className="row">
          <label className="col-md-2" htmlFor="username">
            Username
          </label>
          <input className="col-md-5" type="text" placeholder="johndoe" />
        </div>
      </form>
    </div>
  );
};

export default UserRight;
