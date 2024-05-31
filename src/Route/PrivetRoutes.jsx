import { PropTypes } from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from '../pages/Loding/Loding';

const PrivetRoutes = ({ children }) => {
  const { userDta, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Loding />;
  }
  if (userDta) {
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname} />;
};

export default PrivetRoutes;
PrivetRoutes.propTypes = {
  children: PropTypes.node,
};
