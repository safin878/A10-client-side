import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="loading loading-spinner text-primary flex justify-center items-center"></div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
