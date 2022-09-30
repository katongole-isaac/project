import { useState, useEffect } from "react";
import authFetch from "./authFetch";

const useFetch = (url) => {
	const [error, setError] = useState("");
	const[errorDetails, setErrorDetails] = useState({});
	const [results, setResults] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getData = async (url) => {
		try {
			const resp = await authFetch(url);

			if (resp.data && resp.data.length !== 0) {
				setResults(resp.data);
				setIsLoading(false);
			}
		} catch (ex) {
			const message = ex.response.data;
			console.log(ex);
			console.log(message);
			setErrorDetails(ex);
			setError(message);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData(url);
	}, [url]);

	return { error, isLoading, results, errorDetails };
};
export default useFetch;
