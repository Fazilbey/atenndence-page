import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const PrivateRoutes = ({ roles }) => {
  const { user } = useAuthContext();

  return roles.includes(user.role) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
