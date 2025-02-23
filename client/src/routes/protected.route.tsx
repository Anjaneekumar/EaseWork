import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Always render the child routes
  return <Outlet />;
};

export default ProtectedRoute;

