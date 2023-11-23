import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ redirectPath = "/login", children }) {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <Navigate to={redirectPath} />;
  // }

  return children;
}

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.element,
};

export default ProtectedRoute;
