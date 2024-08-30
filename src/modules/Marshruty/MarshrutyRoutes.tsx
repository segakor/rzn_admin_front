import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const MarshrutyRoutes = () => {
  const SamostoyatelnyeMarshruty = lazy(
    () => import("./SamostoyatelnyeMarshruty")
  );
  const OrganizovannyeMarshruty = lazy(
    () => import("./OrganizovannyeMarshruty")
  );

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="marshruty">
          <Route
            path="organizovannye-marshruty"
            element={
              <Suspense fallback={<Spin />}>
                <OrganizovannyeMarshruty />
              </Suspense>
            }
          />
          <Route
            path="samostoyatelnye-marshruty"
            element={
              <Suspense fallback={<Spin />}>
                <SamostoyatelnyeMarshruty />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
