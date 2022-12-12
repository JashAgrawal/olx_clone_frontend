import axios from "axios";
import React, { useEffect, useState } from "react";
import prods from "../assests/prods.jpg";
import ProductListing from "../Components/productListing";
import Constants from "../utils/constants";
import { setLoading } from "../redux/slices/loading";
import { useSelector, useDispatch } from "react-redux";
function MyPostings() {
  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    dispatch(setLoading(true));
    const userId = userData.id;
    const res = axios
      .get(`${Constants.baseUrl}/Product/userPosted_products/${userId}`)
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
        postings={true}
        products={products}
        featured={false}
        heading="Your Ads"
      />
    </>
  );
}

export default MyPostings;
