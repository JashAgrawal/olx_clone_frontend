import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isExpired, decodeToken } from "react-jwt";
import { Outlet } from "react-router-dom";
function RequireAuth() {
  const userData = useSelector((state) => state.auth);
  let location = useLocation();

  const decodedToken = decodeToken(userData.token);
  const isExpire = isExpired(userData.token);

  if (!decodedToken?.id || isExpire) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuth;
