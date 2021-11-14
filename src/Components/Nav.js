import React from "react";
import { Link } from "react-router-dom";
import "./Component css/nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navigation-w">
        <div className="nav-container">
          <div className="nav-height-flx">
            <Link to="/" className="_wf-dev-job-link-w w-inline-block">
              <div className="nav-logo-name">Shoplist</div>
            </Link>

            <Link to="/FormPage" className="btn w-inline-block">
              <div>Post a shop</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
