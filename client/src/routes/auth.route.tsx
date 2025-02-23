import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  // Hardcode a mock user object
  const user = {
    currentWorkspace: { _id: 'mock-workspace-id' }
  };

  // Always redirect to the workspace route
  return <Navigate to={`workspace/${user.currentWorkspace._id}`} replace />;
};

export default AuthRoute;

