import axios from "axios";
import React, { useReducer, createContext, useState } from "react";

const UserState = createContext();

const UserContext = ({ children }) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const pendingUser = JSON.parse(localStorage.getItem('pendingUser'));
	
	let id = localStorage.getItem("id_token");
	const [isUserLoggedIn, dispatch] = useReducer(reducer, {
		id,
		isAuthenticated: !!localStorage.getItem(id),
	});

	return (
		<UserState.Provider value={{ isUserLoggedIn, dispatch, id, user, pendingUser }}>
			{children}
		</UserState.Provider>
	);
};

export { UserContext, UserState, loginUser, signOut };

function reducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				id: localStorage.getItem(action.id),
				isAuthenticated: true,
			};
		case "SIGN_UP":
			return {
				...state,
				id: localStorage.getItem(action.id),
				isAuthenticated: true,
			};

		case "SIGN_OUT":
			return {
				...state,
				id: "",
				isAuthenticated: false,
			};
	}
}

async function loginUser(url, userData) {
	const sendData = JSON.stringify({ ...userData });
	const res = await axios.post(url, sendData, {
		headers: { "Content-Type": "application/json" },
	});
	return res;
}

function signOut(dispatch, id) {
	dispatch({ type: "SIGN_OUT", id });
	localStorage.removeItem(id);
	localStorage.removeItem("user");
	localStorage.removeItem("id_token");
	localStorage.removeItem("letter");
	localStorage.removeItem("currentPage");

	return;
}
