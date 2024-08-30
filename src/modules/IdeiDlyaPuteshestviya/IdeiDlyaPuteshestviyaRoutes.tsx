import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const IdeiDlyaPuteshestviyaRoutes = () => {
  const ChtoPosmotret = lazy(() => import("./ChtoPosmotret"));
  const Informer = lazy(() => import("./Informer"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="idei-dlya-puteshestviya">
          <Route
            path="chto-posmotret"
            element={
              <Suspense fallback={<Spin />}>
                <ChtoPosmotret/>
              </Suspense>
            }
          />
          <Route
            path="chem-zanyatsya"
            element={
              <Suspense fallback={<Spin />}>
                <Informer />
              </Suspense>
            }
          />
          <Route
            path="gde-ostanovitsya"
            element={
              <Suspense fallback={<Spin />}>
                <Informer />
              </Suspense>
            }
          />
          <Route
            path="gde-poest"
            element={
              <Suspense fallback={<Spin />}>
                <Informer />
              </Suspense>
            }
          />
          <Route
            path="suveniry"
            element={
              <Suspense fallback={<Spin />}>
                <Informer />
              </Suspense>
            }
          />
          <Route
            path="vecher-v-gorode"
            element={
              <Suspense fallback={<Spin />}>
                <Informer />
              </Suspense>
            }
          />
          <Route
            path="zdorove"
            element={
              <Suspense fallback={<Spin />}>
                <Informer />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
