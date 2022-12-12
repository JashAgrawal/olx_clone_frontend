import React from "react";
import { BsHeart, BsHeartFill, BsZoomIn } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import sold from "../assests/sold.png";
import prod from "../assests/prod.png";
import Constants from "../utils/constants";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

const Card = (props) => {
  return (
    <Link
      to={`/product-details/${props.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="card m-2 shadow"
        style={{ width: "18rem", height: "18rem" }}
      >
        <div className="d-flex  position-relative">
          {props?.featured && (
            <div className="position-absolute top-0 start-0 m-1">
              <div className=" p-1 bg-warning rounded">Featured</div>
            </div>
          )}
          <div
            className="position-absolute top-0 end-0 m-1 border p-2"
            style={{
              height: "2rem",
              width: "2rem",
              alignItems: "center",
              display: "flex",
              borderRadius: "50%",
            }}
          >
            {!props.postings ? (
              <>
                {props.wishlisted ? (
                  <BsHeart />
                ) : (
                  <BsHeartFill color="#ff4e45" />
                )}
              </>
            ) : (
              <AiFillDelete />
            )}
          </div>
        </div>

        <img
          src={Constants.baseUrl + "/" + props.images}
          style={{ objectFit: "scale-down", height: "60%" }}
          className="card-img-top  border-bottom p-2 under"
          alt="img"
          onError={(e) => {
            e.target.src = prod;
          }}
        />
        {/* <img
        src={sold}
        style={{ objectFit: "scale-down", height: "40%" }}
        className="over"
        alt="sold"
      /> */}

        <div
          className="card-body ps-2 p-1"
          style={{
            borderLeft: props.featured
              ? "4px solid #ffce32"
              : "4px solid black",
            borderBottomLeftRadius: "0.40rem",
          }}
        >
          <div>
            <h5 className="card-title d-flex justify-content-start">
              <strong
                style={{
                  fontSize: "20px",
                  marginTop: "0.5rem",
                }}
              >
                ₹ {props.price}
              </strong>
              <button
                to="/add-products"
                className={`ms-auto btn btn-light border border-4 border-${
                  props.sold ? "Danger" : "success"
                } rounded-pill`}
              >
                {props.sold ? "SOLD" : "UNSOLD"}
              </button>
            </h5>
          </div>
          <p className="card-text" style={{ marginBottom: "0.4rem" }}>
            {props.name}
          </p>
          <p className="card-text">
            <small className="text-muted">{props.location}</small>
            <div className="float-end">
              <small className="text-muted">10 days ago </small>
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
