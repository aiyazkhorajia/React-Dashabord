import React from "react";
import profilePic from "../assets/images/profile-photo.jpg";

const NavRightSection = () => {
  return (
    <div className="navbar-right">
      <div className="user d-inline-block">
        <button
          className="btn btn-empty p-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <span className="name">Aiyaz Khorajia</span>
          <span>
            <img alt="Profile Picture" src={profilePic} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavRightSection;
