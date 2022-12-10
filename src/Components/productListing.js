import React from "react";
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
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          class="d-flex flex-wrap"
          style={{ maxWidth: "90vw", margin: "2rem" }}
        >
          {props?.products.map(() => (
            <Card
              price={1000}
              featured={true}
              name="Iphone 14 New"
              location="south bombay"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductListing;
