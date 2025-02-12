import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const ProjectRoutes = () => {
  const Promturizm = lazy(() => import("./Promturizm/pages/Promturizm"));
  const PromturizmAdd = lazy(() => import("./Promturizm/pages/PromturizmAdd"));
  const PromturizmEdit = lazy(() => import("./Promturizm/pages/PromturizmEdit"));

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
        </Route>
      </Routes>
    </Suspense>
  );
};
