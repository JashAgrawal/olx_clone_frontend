import React, { useEffect, useState } from "react";
import prods from "../assests/prods.jpg";
import ProductListing from "../Components/productListing";
import Constants from "../utils/constants";
import { setLoading } from "../redux/slices/loading";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import fetchClient from "../utils/fetchClient";
function Products(props) {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setFilterdProducts] = useState([]);

  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const userId = userData.id;
    const res = fetchClient
      .post(`${Constants.baseUrl}/Product/unsold_products`, { id: userId })
      .then((res) => {
        setproducts(res.data?.products);
        setFilterdProducts(res.data?.products);
      })
      .catch((err) => {
        alert("Products Fetching Error");
        console.log(err);
      });
    dispatch(setLoading(false));
  }, [userData.id]);
  useEffect(() => {
    dispatch(setLoading(true));
    const productss = products.filter((product) =>
      product?.name.includes(props.search)
    );
    setFilterdProducts(productss);
    dispatch(setLoading(false));
  }, [props.search, products]);
  return (
    <>
      <div
        style={{
          height: "10rem",
          width: "98.8  vw",
          justifyContent: "center",
          display: "flex",
          // margin: "0.25rem",
        }}
      >
        <img
          className="rounded img-fluid"
          src={prods}
          style={{
            height: "10rem",
            width: "100vw",
            margin: "auto",
            objectFit: "cover",
            border: "2px solid #ffce32",
          }}
          // className=""
          alt="Banner"
        />
      </div>
      <ProductListing
        products={filteredProducts}
        featured
        heading="Recommended"
      />
    </>
  );
}

export default Products;
