import React from "react";
import { BsHeart, BsHeartFill, BsZoomIn } from "react-icons/bs";
import sold from "../assests/sold.png";
import iphone from "../assests/iphone.jpg";
// import { connect } from "react-redux";

const Card = (props) => {
  return (
    <div
      className="card m-2 shadow"
      style={{ width: "18rem", height: "18rem" }}
    >
      <div className="d-flex  position-relative">
        <div className="position-absolute top-0 start-0 m-1">
          <div className=" p-1 bg-warning rounded">Featured</div>
        </div>
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
          {props.wishlisted ? <BsHeart /> : <BsHeartFill color="#ff4e45" />}
        </div>
      </div>

      <img
        src={iphone}
        style={{ objectFit: "scale-down", height: "60%" }}
        className="card-img-top  border-bottom p-2 under"
        alt="img"
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
          borderLeft: props.featured ? "4px solid #ffce32" : "4px solid black",
          borderBottomLeftRadius: "0.40rem",
        }}
      >
        <h5
          class="card-title d-flex justify-content-start"
          style={{ alignItems: "center" }}
        >
          <strong
            style={{
              fontSize: "20px",
              marginTop: "0.5rem",
            }}
          >
            ₹ {props.price}
          </strong>
        </h5>
        <p className="card-text" style={{ marginBottom: "0.4rem" }}>
          {props.name}
        </p>
        <p className="card-text">
          <small className="text-muted">{props.location}</small>
          <div class="float-end">
            <small className="text-muted">10 days ago </small>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Card;
