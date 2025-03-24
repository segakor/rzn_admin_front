import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../components/PrivateRoute";

export const ProfessionalamRoutes = () => {
  const BazaZnanij = lazy(() => import("./BazaZnanij"));
  const ReestrTuroperatorov = lazy(() => import("./ReestrTuroperatorov"));
  const NovostiArt = lazy(() => import("./NovostiArt"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="professionalam" element={<PrivateRoute />}>
          <Route
            path="baza-znanij"
            element={
              <Suspense fallback={<Spin />}>
                <BazaZnanij />
              </Suspense>
            }
          />
          <Route
            path="reestr-turoperatorov"
            element={
              <Suspense fallback={<Spin />}>
                <ReestrTuroperatorov />
              </Suspense>
            }
          />
          <Route
            path="novosti-art"
            element={
              <Suspense fallback={<Spin />}>
                <NovostiArt />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
