import axios from "axios";
import { store } from "../redux/store";

const instance = axios.create({});
const state = store.getState();
const token = state.auth.token;
console.log(token);
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const setAuthToken = (token) => {
  console.log(token);
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete instance.defaults.headers.common["Authorization"];
};

export default instance;
