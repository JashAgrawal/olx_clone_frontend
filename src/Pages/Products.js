import React from "react";

import prods from "../assests/prods.jpg";
import ProductListing from "../Components/productListing";
function Products() {
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
          className="rounded"
          src={prods}
          style={{
            height: "10rem",
            width: "100vw",
            margin: "auto",
            objectFit: "cover",
            border: "2px solid #ffce32",
          }}
          class="img-fluid"
          alt="Banner"
        />
      </div>
      <ProductListing
        products={[1, 2, 3, 4, 5, 6, 7, 8]}
        heading="Recommended"
      />
    </>
  );
}

export default Products;
