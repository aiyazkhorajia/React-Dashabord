import React from "react";

const SummaryCards = ({ featuredPost, postCount }) => {
  return (
    <div className="icon-cards-row">
      <ul className="glide__slides row">
        <li className="glide__slide col-lg-4">
          <a href="#" className="card">
            <div className="card-body text-center">
              <i className="iconsminds-receipt-4"></i>
              <p className="card-text mb-0">Featured Posts</p>
              <p className="lead text-center">{featuredPost}</p>
            </div>
          </a>
        </li>
        <li className="glide__slide col-lg-4">
          <a href="#" className="card">
            <div className="card-body text-center">
              <i className="iconsminds-check"></i>
              <p className="card-text mb-0">Total Posts</p>
              <p className="lead text-center">{postCount || 0}</p>
            </div>
          </a>
        </li>
        <li className="glide__slide col-lg-4">
          <a href="#" className="card">
            <div className="card-body text-center">
              <i className="iconsminds-folder"></i>
              <p className="card-text mb-0">Categories</p>
              <p className="lead text-center">5</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SummaryCards;
