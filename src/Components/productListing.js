import React, { useEffect } from "react";
import Card from "../Components/card";
function ProductListing(props) {
  return (
    <>
      {props?.heading && (
        <>
          <h3
            className="border-bottom"
            style={{
              margin: "0.5rem 0 0 4rem",
              paddingBottom: "0.5rem",
              marginRight: "5rem",
            }}
          >
            {props.heading}
          </h3>
        </>
      )}

      <div
        style={{
          justifyContent: "start",
          display: "flex",
          marginLeft: "2rem",
        }}
      >
        <div
          className="d-flex flex-wrap"
          style={{ maxWidth: "90vw", margin: "2rem" }}
        >
          {props?.products.length !== 0 ? (
            <>
              {props?.products.map((product) => (
                <Card
                  sold={product.isSold}
                  id={product._id}
                  price={product?.price}
                  postings={props?.postings}
                  featured={props?.featured}
                  name={product?.name}
                  location={product?.location}
                  images={product?.images[0]}
                />
              ))}
            </>
          ) : (
            "No Items To Display Here"
          )}
        </div>
      </div>
    </>
  );
}

export default ProductListing;
