import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  const Login = lazy(() => import("../modules/Login"));
  const Main = lazy(() => import("../modules/Main"));

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
