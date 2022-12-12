import React, { useEffect, useState } from "react";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import prod from "../assests/prod.png";
import { useNavigate, useParams } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { setLoading } from "../redux/slices/loading";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Constants from "../utils/constants";
import Modal from "../Components/modal";
const ProductDetail = (props) => {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    dispatch(setLoading(true));
    const res = axios
      .get(`${Constants.baseUrl}/Product/get_product_by_id/${id}`)
      .then((res) => {
        setProduct(res.data?.products);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Fetching error");
      });
    dispatch(setLoading(false));
  }, []);
  const handleSell = () => {
    axios
      .post(`${Constants.baseUrl}/Product/sell_product/${id}`, {
        buyerId: userData.id,
      })
      .then((res) => {
        // setProduct(res.data?.products);
        console.log(res.data);
        alert("Bought item");
        history("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        alert("Buying error");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "2rem",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "65vw",
        }}
      >
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {product?.images?.length !== 0
              ? product?.images?.map((img, index) => (
                  <div class={`carousel-item ${index == 0 ? "active" : ""}`}>
                    <img
                      src={Constants.baseUrl + "/" + img}
                      class="d-block w-100"
                      alt="..."
                      onError={(e) => (e.target.src = prod)}
                    />
                  </div>
                ))
              : ""}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon rounded-circle"
              style={{ backgroundColor: "black" }}
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              style={{ backgroundColor: "black" }}
              class="carousel-control-next-icon rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <hr className="m-3" />
        <div className="p-3">
          <h3>Description :-</h3>
        </div>
        <hr className="m-3" />
        <div className="p-3">
          <p style={{ fontSize: "18px" }}>{product.description}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5%",
            border: "1px solid gray",
            borderRadius: "0.5rem",
            marginBottom: "5%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              ₹ {product.price}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <AiOutlineShareAlt size={20} />
              <AiOutlineHeart size={20} />
            </div>
          </div>
          <div style={{ color: "gray", fontSize: "24px", marginBottom: "2%" }}>
            {product.name}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "gray", fontSize: "14px" }}>
              {product.location}
            </div>
            {/* <div>Nov 26</div> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5%",
            border: "1px solid gray",
            borderRadius: "0.5rem",
            marginBottom: "5%",
          }}
        >
          <div
            style={{ fontWeight: "600", fontSize: "20px", marginBottom: "2%" }}
          >
            Seller description
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaUserCircle size={50} />
            <div style={{ fontSize: "12px", marginLeft: "2%" }}>
              <div style={{ fontWeight: "bold" }}>{userData.name}</div>
              <div>Member since Apr 2018</div>
            </div>
          </div>
          {/* <div
            style={{
              display: "flex",
              width: "100%",
              border: "2px solid black",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.5rem",
              padding: "2% 0",
              marginTop: "2%",
              whiteSpace: "break-spaces",
            }}
          > */}
          <Modal
            text={
              <>
                Buy <GiShoppingBag />
              </>
            }
            title={"You sure you want to buy ?"}
            description={"Payment/Chat mechanisms"}
            nextText={"Buy"}
            onNext={() => handleSell}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
