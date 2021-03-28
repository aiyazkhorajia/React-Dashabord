import React from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <div className="menu">
      <div className="main-menu default-transition">
        <div className="scroll ps ps--active-y">
          <ul className="list-unstyled">
            <li>
              <Link as="a" to="/Home">
                <i className="iconsminds-shop-4"></i>
                <span>Dashboards</span>
              </Link>
            </li>
            <li>
              <Link as="a" to="/about">
                <i className="iconsminds-digital-drawing"></i> About
              </Link>
            </li>
            <li>
              <Link as="a" to="/contact">
                <i className="iconsminds-pantone"></i> Contact
              </Link>
            </li>
            <li className="active">
              <Link as="a" to="/dashaboard">
                <i className="iconsminds-air-balloon-1"></i> Works
              </Link>
            </li>
            <li>
              <a href="#menu">
                <i className="iconsminds-three-arrow-fork"></i> Other
              </a>
            </li>
            <li>
              <a href="Blank.Page.html">
                <i className="iconsminds-bucket"></i> Blank Page
              </a>
            </li>
            <li>
              <a
                href="https://dore-jquery-docs.coloredstrategies.com/"
                target="_blank"
                rel="noreferrer">
                <i className="iconsminds-library"></i> Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
