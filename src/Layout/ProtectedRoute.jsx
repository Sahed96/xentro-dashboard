/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const Navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
