import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const BannerRoutes = () => {
  const Banner = lazy(() => import("./pages/Banner"));
  const BannerAdd = lazy(() => import("./pages/BannerAdd"));
  const BannerEdit = lazy(() => import("./pages/BannerEdit"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="banner">
          <Route
            path="all"
            element={
              <Suspense fallback={<Spin />}>
                <Banner />
              </Suspense>
            }
          />
          <Route
            path="add"
            element={
              <Suspense fallback={<Spin />}>
                <BannerAdd />
              </Suspense>
            }
          />
          <Route
            path="edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <BannerEdit />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
