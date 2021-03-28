import React from "react";

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
            <img alt="Profile Picture" src="../../profile-photo.jpg" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavRightSection;
