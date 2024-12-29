/** @format */

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import network from "./network.svg";
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            NIDS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {!localStorage.getItem("token") ? (
                  <form className="d-flex">
                    <Link
                      className="btn btn-dark mx-1"
                      to="/login"
                      role="button"
                    >
                      Login
                    </Link>
                    <Link
                      className="btn btn-dark mx-1"
                      to="/signup"
                      role="button"
                    >
                      SignUp
                    </Link>
                  </form>
                ) : (
                  <form className="d-flex">
                    <button onClick={handleLogout} className="btn btn-dark">
                      logout
                    </button>
                    {/* <Link className="btn btn-secondary mx-1" to="/myinfo" role="button"><i className="fa fa-user" aria-hidden="true"></i></Link> */}
                  </form>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                NETWORK <span className="text-warning">INTRUSION </span>
                DETECTION SYSTEM
              </h1>
              <p className="lead my-4">
                <small>
                  This is a software application to detect network intrusion by
                  monitoring a network or system for malicious activity and
                  predicts whether it is Normal or Abnormal(attacked with
                  intrusion classes like DOS/PROBE/R2L/U2R).
                </small>
              </p>
            </div>
            <img
              className="img-fluid  w-50  d-none d-sm-block"
              src={network}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
