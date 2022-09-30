import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserState } from "../userContext";

const PendingProtected = ({ children }) => {
	const { pendingUser: user } = useContext(UserState);
	console.log(user);	
	if (user === null || user.user === "") return <Navigate to="/login" />;

	return children;
};

export default PendingProtected;
