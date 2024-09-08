import { Spin } from "antd";
import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { tokenService } from "../service/tokenService";

export const AppRoutes = () => {
  const Login = lazy(() => import("../modules/Login"));
  const Main = lazy(() => import("../modules/Main"));


  const auth = tokenService.getIsAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);


  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="*" element={<Navigate replace to="main" />} />
      </Routes>
    </Suspense>
  );
};
