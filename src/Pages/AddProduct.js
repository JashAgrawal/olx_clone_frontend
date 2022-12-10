import React from "react";

function AddProduct() {
  return (
    <div className="container">
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        placeholder="Ad Title"
        aria-describedby="inputGroup-sizing-lg"
      />
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
      <div class="rui-z4oOZ rui-3i1AN">
        <div class="rui-3zt7h rui-iU02L rui-WrCgP">
          <div>
            <span>₹</span>
          </div>
        </div>
        <div class="rui-3APY9">
          <input
            id="price"
            name="price"
            type="text"
            autocomplete="off"
            class="rui-3vs1L rui-2LyaK undefined"
            data-aut-id="inPrice"
            min="0"
            pattern="(\d+[., \s]?\d?)*"
            value=""
          />
          <div class="rui-1pgaV rui-Vcp5d"></div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
