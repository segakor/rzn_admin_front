import { Navigate, Route, Routes } from "react-router";
import { PrivateRoute } from "../../components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="/"
          element={<div className="text-lg">Админ панель ryazantourism.ru</div>}
        />
      </Route>
      <Route path="main/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
