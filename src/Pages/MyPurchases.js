import React from "react";

function MyPurchases() {
  return (
    <div>
      <ProductListing
        products={[1, 2, 3, 4, 5, 6, 7, 8]}
        heading="Recommended"
      />
    </div>
  );
}

export default MyPurchases;
