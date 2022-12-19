import axios from "axios";
import React, { useEffect, useState } from "react";
import prods from "../assests/prods.jpg";
import ProductListing from "../Components/productListing";
import Constants from "../utils/constants";
import { setLoading } from "../redux/slices/loading";
import { useSelector, useDispatch } from "react-redux";
import fetchClient from "../utils/fetchClient";
function MyPurchases() {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    dispatch(setLoading(true));
    const userId = userData.id;
    const res = fetchClient
      .get(`${Constants.baseUrl}/Product/userPurchased_products/${userId}`)
      .then((res) => {
        setproducts(res.data?.products);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(setLoading(false));
  }, []);
  return (
    <>
      <ProductListing
        products={products}
        featured={false}
        heading="Bought Items"
      />
    </>
  );
}

export default MyPurchases;
