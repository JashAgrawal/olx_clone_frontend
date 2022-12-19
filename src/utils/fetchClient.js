import axios from "axios";
import { store } from "../redux/store";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_PATH,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = store.getState().auth.token;
    console.log(token);
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export default fetchClient();
