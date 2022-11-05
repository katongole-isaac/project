import axios from "axios";
import { BaseUrl as base_url } from "./baseUrl";

const baseURL = `http://localhost:3001/api`;
// const baseURL = `${base_url}/api`; //server in prod

// const token = localStorage.getItem("user")
// 	? JSON.parse(localStorage.getItem("user")).token
// 	: "";

const authFetch = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    // "x-auth-token": token,
  },
});

//We need to get the token from localStorage when the user object is ready stored.
//The above error was solved with interceptors.
//Before the request leaves the app, the interceptors mounts some data on to it.
const user = JSON.parse(localStorage.getItem("user"));

authFetch.interceptors.request.use(
  (req) => {
    req.headers.common["x-auth-token"] = !!localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : "";

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (resp) => {
    return resp;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      console.log(`user need to log out`);
    }
    return Promise.reject(error);
  }
);

export default authFetch;
