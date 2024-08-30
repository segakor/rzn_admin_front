import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const TySMestnymRoutes = () => {
  const Cit = lazy(() => import("./Cit"));
  const NovostyRegiona = lazy(() => import("./NovostyRegiona"));
  const OtvetyNaVoprosy = lazy(() => import("./OtvetyNaVoprosy"));
  const ObratnayaSvyaz = lazy(() => import("./ObratnayaSvyaz"));
  const MobilnoePrilozhenie = lazy(() => import("./MobilnoePrilozhenie"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="ty-s-mestnym">
          <Route
            path="cit"
            element={
              <Suspense fallback={<Spin />}>
                <Cit />
              </Suspense>
            }
          />
          <Route
            path="novosty-regiona"
            element={
              <Suspense fallback={<Spin />}>
                <NovostyRegiona />
              </Suspense>
            }
          />
          <Route
            path="otvety-na-voprosy"
            element={
              <Suspense fallback={<Spin />}>
                <OtvetyNaVoprosy />
              </Suspense>
            }
          />
          <Route
            path="obratnaya-svyaz"
            element={
              <Suspense fallback={<Spin />}>
                <ObratnayaSvyaz />
              </Suspense>
            }
          />
          <Route
            path="mobilnoe-prilozhenie"
            element={
              <Suspense fallback={<Spin />}>
                <MobilnoePrilozhenie />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
