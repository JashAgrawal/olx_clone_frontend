import React from "react";
import olx from "../assests/olx.svg";
import { AiOutlineBell } from "react-icons/ai";
import { FiMessageSquare, FiSearch, FiLogOut, FiPackage } from "react-icons/fi";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top rounded"
      style={{ backgroundColor: "rgb(240, 238, 238)" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src={olx} alt="Olx" class="d-inline-block align-text-top" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#">
                <FiMessageSquare />
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                <AiOutlineBell />
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserAlt />
              </a>

              <ul class="dropdown-menu" style={{ width: "15rem" }}>
                <li>
                  <Link class="dropdown-item " to="/my-ads">
                    <BsFilePost /> {"  "} My Ads
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/bought-items">
                    <FiPackage /> {"  "} Bought Items
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/">
                    <FiLogOut /> {"  "} Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div class="d-flex">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search . . ."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">
                <FiSearch />
              </span>
            </div>
            <Link to="/add-products">
              <button type="button" class="btn btn-outline-primary">
                <FaPlus /> {"  "} Sell
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
