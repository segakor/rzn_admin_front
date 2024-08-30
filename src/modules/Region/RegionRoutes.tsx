import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../components/PrivateRoute";

export const RegionRoutes = () => {
  const Istoriya = lazy(() => import("./Istoriya"));
  const Kultura = lazy(() => import("./Kultura"));
  const Priroda = lazy(() => import("./Priroda"));
  const KuhnyaRyazanskogoKray = lazy(() => import("./KuhnyaRyazanskogoKray"));
  const Arhitektura = lazy(() => import("./Arhitektura"));
  const Sobytiya = lazy(() => import("./Sobytiya"));
  const NasledieRyazan = lazy(() => import("./NasledieRyazan"));
  const NasledieKasimova = lazy(() => import("./NasledieKasimova"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="region" element={<PrivateRoute/>}>
          <Route
            path="istoriya"
            element={
              <Suspense fallback={<Spin />}>
                <Istoriya />
              </Suspense>
            }
          />
          <Route
            path="kultura"
            element={
              <Suspense fallback={<Spin />}>
                <Kultura />
              </Suspense>
            }
          />
          <Route
            path="priroda"
            element={
              <Suspense fallback={<Spin />}>
                <Priroda />
              </Suspense>
            }
          />
          <Route
            path="kuhnya-ryazanskogo-kraya"
            element={
              <Suspense fallback={<Spin />}>
                <KuhnyaRyazanskogoKray />
              </Suspense>
            }
          />
          <Route
            path="arhitektura"
            element={
              <Suspense fallback={<Spin />}>
                <Arhitektura />
              </Suspense>
            }
          />
          <Route
            path="sobytiya"
            element={
              <Suspense fallback={<Spin />}>
                <Sobytiya />
              </Suspense>
            }
          />
          <Route
            path="nasledie-ryazani"
            element={
              <Suspense fallback={<Spin />}>
                <NasledieRyazan />
              </Suspense>
            }
          />
          <Route
            path="nasledie-kasimova"
            element={
              <Suspense fallback={<Spin />}>
                <NasledieKasimova />
              </Suspense>
            }
          />
        </Route>
        <Route path="region/*" element={<Navigate replace to="istoriya" />} />
      </Routes>
    </Suspense>
  );
};
