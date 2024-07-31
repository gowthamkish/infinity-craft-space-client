import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
