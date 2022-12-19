import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthData } from "../redux/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import constants from "../utils/constants";
import fetchClient from "../utils/fetchClient";

function SignUp() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetchClient.post(`${constants.baseUrl}/Auth/signup`, {
        name,
        email,
        password,
      });
      const userData = res.data?.data;
      dispatch(
        setAuthData({
          id: userData.userId,
          name: userData.name,
          token: userData.userToken,
        })
      );
      history("/", { replace: true });
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  return (
    <div className="container d-flex justify-content-center ">
      <div
        className="m-5 p-5 border border-4 border-dark rounded"
        style={{ width: "50%" }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="mb-3">
            <label for="name" class="form-labe fw-semibold">
              Name
            </label>
            <input
              required
              type="text"
              class="form-control my-2 hovering rounded-pill"
              id="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-labe fw-semibold">
              Email address
            </label>
            <input
              required
              type="email"
              class="form-control my-2 hovering rounded-pill"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-semibold">
              Password
            </label>
            <input
              minLength={8}
              required={true}
              type="password"
              class="form-control my-2 hovering rounded-pill"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Link to="/login">
              <a class="link-primary">Already have an Account !</a>
            </Link>
          </div>
          <button
            type="submit"
            class="btn fw-semibold btn-dark rounded-pill my-2 px-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
