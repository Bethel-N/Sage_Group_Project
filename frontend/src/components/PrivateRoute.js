import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AdminSideBar from "./admin sidebar/AdminSideBar";

const PrivateRoute = ({ role }) => {
  const { isAuthenticated, useRole } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && useRole !== role) {
    return <Navigate to="/" />;
  }
  return (
    <div className="d-flex flex-row">
      <AdminSideBar />
      <Outlet />;
    </div>
  );
};

export default PrivateRoute;
