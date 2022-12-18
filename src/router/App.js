import "../common.css";
import Navbar from "../Components/navbar";
import Products from "../Pages/Products";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../Pages/AddProduct";
import MyPostings from "../Pages/MyPostings";
import MyPurchases from "../Pages/MyPurchases";
import { useEffect, useState } from "react";
import Login from "../Pages/login";
import SignUp from "../Pages/signup";
import Loading from "../Pages/loading";
import { useSelector } from "react-redux";
import ProductDetail from "../Pages/productDetail";
import RequireAuth from "./routeGuard";
import NotFound from "../Pages/NotFound";
function App() {
  const [search, setSearch] = useState("");

  const userData = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.loading);

  const handleSearchChange = (value) => {
    setSearch(value);
    console.log(search);
  };
  return (
    <div className="App">
      {!loading ? (
        <>
          <Navbar search={search} setSearch={handleSearchChange} />
          <Routes>
            <Route path="/" element={<Products search={search} />}></Route>
            <Route
              path="/product-details/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route element={<RequireAuth />}>
              <Route path="/add-products" element={<AddProduct />}></Route>
              <Route path="/my-ads" element={<MyPostings />}></Route>
              <Route path="/bought-items" element={<MyPurchases />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
