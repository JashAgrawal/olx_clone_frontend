import React, { useEffect, useState } from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  const initialState = {
    id: "",
    name: "",
    token: "",
  };
  const [authState, setAuthState] = useState(
    JSON.parse(localStorage.getItem("auth")) || initialState
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authState));
  }, [authState]);
  const setAuth = (value) => {
    setAuthState(value);
    localStorage.setItem("auth", JSON.stringify(authState));
  };
  const getAuth = () => {
    return JSON.parse(localStorage.getItem("auth"));
  };
  const logOut = () => {
    setAuthState(initialState);
    localStorage.setItem("auth", JSON.stringify(initialState));
  };
  return (
    <AuthContext.Provider
      value={[getAuth, setAuth, logOut, authState, loading, setLoading]}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
