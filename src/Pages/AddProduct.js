import React, { useState, useRef, useContext } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";
import axios from "axios";
import Constants from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import fetchClient from "../utils/fetchClient";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState("");
  const [location, setLocation] = useState("");
  const userData = useSelector((state) => state.auth);
  const fileInput = useRef(null);

  function handleClick() {
    fileInput.current.click();
  }
  const reset = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setFiles("");
    setLocation("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = userData.id;
      const formData = new FormData();
      formData.append("name", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("images", files);
      formData.append("location", location);
      formData.append("sellerId", userId);
      const res = await fetchClient.post(
        `${Constants.baseUrl}/Product/add_product`,
        formData,
        { headers: { "content-type": "multipart/form-data" } }
      );
      alert("Posted succesfully");
      reset();
    } catch (err) {
      console.log(err);
      alert("Error creating product");
    }
  };
  return (
    <div className="container my-3 ">
      <form>
        <div className="form-floating my-3">
          {/* <p>Ad title</p> */}
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Iphone 14 pro max"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingInput">Ad title</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            placeholder="Leave a Description here"
            id="floatingTextarea"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Ad Description</label>
        </div>
        {/* <div
        className="d-flex flex-row flex-wrap border justify-content-start m-2"
        style={{ maxWidth: "25rem", maxHeight: "20rem" }}
      > */}
        <div className="input-group mb-3">
          <span className="input-group-text">₹</span>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="floatingInputGroup1">Price</label>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "40%",
            marginTop: "1rem",
          }}
        >
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/png, image/gif, image/jpeg"
            multiple
            id="images"
            name="images"
            ref={fileInput}
            onChange={(e) => {
              // console.log("xxxx");
              console.log(e.target.files);
              setFiles(e.target.files[0]);
            }}
          />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((col, index) => (
            // <div className="input-group mb-3 border">
            <button
              key={col}
              className={`btn m-1 btn-outline-${
                index == 0 ? "dark" : "secondary"
              } p-3`}
              disabled={index !== 0 ? true : false}
              type="button"
              id="inputGroupFileAddon03"
              onClick={handleClick}
            >
              <MdAddAPhoto />
              <br />
              Add Photo
            </button>
            // </div>
          ))}
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Maharashtra"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="floatingInput">Location</label>
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark px-6"
          style={{
            whiteSpace: "break-spaces",
            border: "2px solid black",
            borderRadius: "20%/50%",
          }}
          onClick={(e) => handleSubmit(e)}
        >
          <BsFilePost />
          {"   "} Post
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
