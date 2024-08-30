import { Navigate, Outlet } from "react-router-dom";
import { tokenService } from "../../service/tokenService";

export const PrivateRoute = () => {
  const auth = tokenService.getIsAuth();
  console.log({auth})
  if (!auth) return <Navigate to="/login" />;
  return <Outlet />;
};