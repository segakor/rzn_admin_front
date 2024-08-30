import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const KontaktyRoutes = () => {
  const Kontakty = lazy(() => import("./Kontakty"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route
          path="kontakty"
          element={
            <Suspense fallback={<Spin />}>
              <Kontakty />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
};
