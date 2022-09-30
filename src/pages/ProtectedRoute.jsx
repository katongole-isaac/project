import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserState } from "../userContext";

//protecting the dashboard
const ProtectedRoute = ({ children }) => {
	const { isUserLoggedIn, id } = useContext(UserState);
	if (
		isUserLoggedIn.isAuthenticated === false ||
		localStorage.getItem(id) === "undefined"
	) {
		return <Navigate to="/login" />;
	}

	return children;
};
export { ProtectedRoute, AdminProtectedRoute };

const AdminProtectedRoute = ({ children }) => {
	const { isUserLoggedIn, id } = useContext(UserState);
	if (
		isUserLoggedIn.isAuthenticated === false ||
		localStorage.getItem(id) === "undefined"
	) {
		return <Navigate to="/login" />;
	}
	return children;
};
