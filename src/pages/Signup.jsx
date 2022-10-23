import { loginUser, UserState } from "../userContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpComp from "../components/SignUpComp";
import useFetch from "../useFetch";

const url = "http://localhost:3001/api/user/signup";

const AGENCIES_ACC_URL = "/agency/all  ";

const SignUp = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(UserState);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passport: "",
    phone: "",
    agency: "",
    gender: "M",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [signup, setSignup] = useState(true);
  const [agencies, setAgencies] = useState([]);

  const {
    results,
    isLoading,
    error: AgenciesFetchError,
  } = useFetch(AGENCIES_ACC_URL);

	const getAgencies = () => {
		if (error) {
			if (error.code === "ERR_BAD_REQUEST")
				setError("check the fields and try again");
			else if (error.code === "ERR_NETWORK") setError(error.message);
			else console.log(error);
			// setError();
		} else {
			if (Object.keys(results).length !== 0) {
				if (results.agencies?.length !== 0) {
					const agenciesRes = results.agencies;

          setAgencies((prev) => {
            return agenciesRes;
          });
        }
      }
    }
  };

  useEffect(() => {
    getAgencies();
  });

  const loginFunc = async (url, data) => {
    try {
      const res = await loginUser(url, data);

      localStorage.setItem(`${res.data.user}`, res.data.token);
      localStorage.setItem("user", JSON.stringify({ ...res.data }));
      localStorage.setItem(`id_token`, res.data.user);
      dispatch({ type: "SIGN_UP", id: res.data.id });

      if (res.data.status === "pending") {
        navigate("/accounts/pending");
        return;
      }

      console.log(res);
      navigate("/dashboard");
      return;
    } catch (ex) {
      if (ex.code === "ERR_BAD_REQUEST") {
        setError(ex.response.data.error);
        return;
      } else if (ex.code === "ERR_NETWORK") {
        setError(ex.message);
        return;
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  return (
    <SignUpComp
      data={data}
      setData={setData}
      error={error}
      url={url}
      isLoading={isLoading}
      selectItems={results.agencies}
      loginFunc={loginFunc}
      isLogin={isLogin}
      setError={setError}
      signup={signup}
    />
  );
};

export default SignUp;
