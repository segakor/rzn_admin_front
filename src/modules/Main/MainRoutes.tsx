import { Navigate, Route, Routes } from "react-router";
import { PrivateRoute } from "../../components/PrivateRoute";
import { MainPage } from "./MainPage";

export const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="/"
          element={<MainPage />}
        />
      </Route>
      <Route path="main/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
