import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const ProjectRoutes = () => {
  const Promturizm = lazy(() => import("./Promturizm/pages/Promturizm"));
  const PromturizmAdd = lazy(() => import("./Promturizm/pages/PromturizmAdd"));
  const PromturizmEdit = lazy(
    () => import("./Promturizm/pages/PromturizmEdit")
  );

  const Poslushat = lazy(
    () => import("./Biblioteka/Poslushat/pages/Poslushat")
  );
  const PoslushatAdd = lazy(
    () => import("./Biblioteka/Poslushat/pages/PoslushatAdd")
  );
  const PoslushatEdit = lazy(
    () => import("./Biblioteka/Poslushat/pages/PoslushatEdit")
  );

  const Posmotret = lazy(
    () => import("./Biblioteka/Posmotret/pages/Posmotret")
  );
  const PosmotretAdd = lazy(
    () => import("./Biblioteka/Posmotret/pages/PosmotretAdd")
  );
  const PosmotretEdit = lazy(
    () => import("./Biblioteka/Posmotret/pages/PosmotretEdit")
  );

  const Pochitat = lazy(
    () => import("./Biblioteka/Pochitat/pages/Pochitat")
  );
  const PochitatAdd = lazy(
    () => import("./Biblioteka/Pochitat/pages/PochitatAdd")
  );
  const PochitatEdit = lazy(
    () => import("./Biblioteka/Pochitat/pages/PochitatEdit")
  );

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="projects">
          <Route
            path="promturizm"
            element={
              <Suspense fallback={<Spin />}>
                <Promturizm />
              </Suspense>
            }
          />
          <Route
            path="promturizm/add"
            element={
              <Suspense fallback={<Spin />}>
                <PromturizmAdd />
              </Suspense>
            }
          />
          <Route
            path="promturizm/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <PromturizmEdit />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/poslushat"
            element={
              <Suspense fallback={<Spin />}>
                <Poslushat />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/poslushat/add"
            element={
              <Suspense fallback={<Spin />}>
                <PoslushatAdd />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/poslushat/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <PoslushatEdit />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/posmotret"
            element={
              <Suspense fallback={<Spin />}>
                <Posmotret />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/posmotret/add"
            element={
              <Suspense fallback={<Spin />}>
                <PosmotretAdd />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/posmotret/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <PosmotretEdit />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/pochitat"
            element={
              <Suspense fallback={<Spin />}>
                <Pochitat />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/pochitat/add"
            element={
              <Suspense fallback={<Spin />}>
                <PochitatAdd />
              </Suspense>
            }
          />
          <Route
            path="biblioteka/pochitat/edit/:id"
            element={
              <Suspense fallback={<Spin />}>
                <PochitatEdit />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
