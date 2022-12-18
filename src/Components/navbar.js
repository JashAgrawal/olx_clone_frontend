import React from "react";
import olx from "../assests/olx.svg";
import { AiOutlineBell } from "react-icons/ai";
import { FiMessageSquare, FiSearch, FiLogOut, FiPackage } from "react-icons/fi";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/slices/auth";
function Navbar(props) {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top rounded"
      style={{ backgroundColor: "rgb(240, 238, 238)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={olx} alt="Olx" className="d-inline-block align-text-top" />
        </Link>
        <div className="d-flex ">
          <div
            className="input-group mx-2 "
            style={{ borderRadius: "30%/50%" }}
          >
            <span
              className="input-group-text rounded-end rounded-5"
              id="basic-addon2"
              onClick={() => {
                props.setSearch(props.search);
              }}
            >
              <FiSearch />
            </span>
            <input
              type="text"
              className="form-control rounded-start rounded-5"
              placeholder="Global Search . . ."
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={props.search}
              onChange={(e) => {
                props.setSearch(e.target.value);
              }}
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData && userData?.loggedIn ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    <FiMessageSquare size={24} />
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" href="#">
                    <AiOutlineBell size={24} />
                  </Link>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUserAlt size={22} />
                  </a>

                  <ul className="dropdown-menu" style={{ width: "15rem" }}>
                    <li>
                      <Link className="dropdown-item " to="/my-ads">
                        <BsFilePost /> {"  "} My Ads
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/bought-items">
                        <FiPackage /> {"  "} Bought Items
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={() => {
                          dispatch(logOut());
                          // window.location.reload();
                        }}
                      >
                        <FiLogOut /> {"  "} Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <Link
                to="/login"
                className="btn btn-light mx-2 px-3 border border-4 border-warning rounded-pill"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaUserAlt style={{ marginRight: "4px" }} />
                Login
              </Link>
            )}
            <Link
              to="/add-products"
              className="btn btn-light mx-2 px-3  border border-4 border-warning rounded-pill"
              style={{
                display: "flex",
                textDecoration: "none",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaPlus style={{ marginRight: "4px" }} /> Sell
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
