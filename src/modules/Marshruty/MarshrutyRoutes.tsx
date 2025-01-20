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
    () => import("./OrganizovannyeMarshruty/pages/OrganizovannyeMarshruty")
  );
  const OrganizovannyeMarshrutyAdd = lazy(
    () => import("./OrganizovannyeMarshruty/pages/OrganizovannyeMarshrutyAdd")
  );
  const OrganizovannyeMarshrutyEdit = lazy(
    () => import("./OrganizovannyeMarshruty/pages/OrganizovannyeMarshrutyEdit")
  );
  const Gid = lazy(
    () => import("./Gid/pages/Gid")
  );
  const GidAdd = lazy(
    () => import("./Gid/pages/GidAdd")
  );
  const GidEdit = lazy(
    () => import("./Gid/pages/GidEdit")
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
                <OrganizovannyeMarshrutyAdd />
              </Suspense>
            }
          />
          <Route
            path="organizovannye-marshruty/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <OrganizovannyeMarshrutyEdit />
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
          <Route
            path="gid"
            element={
              <Suspense fallback={<Spin />}>
                <Gid />
              </Suspense>
            }
          />
          <Route
            path="gid/add"
            element={
              <Suspense fallback={<Spin />}>
                <GidAdd />
              </Suspense>
            }
          />
          <Route
            path="gid/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <GidEdit />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
