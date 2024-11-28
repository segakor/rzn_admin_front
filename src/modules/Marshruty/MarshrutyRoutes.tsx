import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const MarshrutyRoutes = () => {
  const SamostoyatelnyeMarshruty = lazy(
    () => import("./SamostoyatelnyeMarshruty/pages/SamostoyatelnyeMarshruty")
  );
  const SamostoyatelnyeMarshrutyAdd = lazy(
    () => import("./SamostoyatelnyeMarshruty/pages/SamostoyatelnyeMarshrutyAdd")
  );
  const SamostoyatelnyeMarshrutyEdit = lazy(
    () =>
      import("./SamostoyatelnyeMarshruty/pages/SamostoyatelnyeMarshrutyEdit")
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
            path="organizovannye-marshruty/add"
            element={
              <Suspense fallback={<Spin />}>
                <div>organizovannye-marshruty/add</div>
              </Suspense>
            }
          />
          <Route
            path="organizovannye-marshruty/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <div>organizovannye-marshruty/edit</div>
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
          <Route
            path="samostoyatelnye-marshruty/add"
            element={
              <Suspense fallback={<Spin />}>
                <SamostoyatelnyeMarshrutyAdd />
              </Suspense>
            }
          />
          <Route
            path="samostoyatelnye-marshruty/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <SamostoyatelnyeMarshrutyEdit />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
