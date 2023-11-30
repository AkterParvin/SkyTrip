/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../Components/Pages/Shared/Hooks/useUserRole";
import PropTypes from 'prop-types';


const GuideRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isGuide, isRoleLoading, isLoading] = useUserRole();
    console.log(isAdmin, isGuide);
    if (loading || isRoleLoading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (user?.email && isGuide) {
        return children;
    } return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};
GuideRoute.propTypes = {
    children: PropTypes.node
}
export default GuideRoute;