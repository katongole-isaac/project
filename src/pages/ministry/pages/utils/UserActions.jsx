import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import { Fab, Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import { green } from "@mui/material/colors";
import { useEffect } from "react";
import authFetch from "../../../../authFetch";

const updateErrorMsg = "something failed, cross check the row and try again";

const UserAction = ({
	param,
	rowId,
	setRowId,
	setUpdateError,
	UPDATE_AGENCY_URL,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSucess] = useState(false);

	const handleSave = async () => {
		setIsLoading(true);

		try {
			const resp = await authFetch.put(
				`${UPDATE_AGENCY_URL}/${param.id}`,
				param.row
			);
			if (resp.status >= 200 && resp.status <= 299) {
				setSucess(true);
			}
		} catch (ex) {
			console.log(ex);
			
			setUpdateError((prev) => {
				return {
					...prev,
					msg: updateErrorMsg,
					isOpen: true,
				};
			});
		}

		console.log("saving to DB...", param.row);
		setRowId(null);
		setIsLoading(false);
	};

	useEffect(() => {
		if (param.id === rowId && success) setSucess(false);
	}, [rowId]);

	return (
		<Box sx={{ m: 1, position: "relative" }}>
			{success ? (
				<>
					<Fab
						color="success"
						sx={{
							width: 40,
							height: 40,
							bgColor: green[500],
							// '&:hover':
						}}
					>
						<CheckIcon />
					</Fab>
				</>
			) : (
				<>
					<Fab
						color="primary"
						// size="small"
						onClick={handleSave}
						sx={{
							width: 40,
							height: 40,
							bgColor: green[500],
							"&:hover": { bgColor: green[700] },
						}}
						disabled={param.id !== rowId || isLoading} //param.id !== rowId ||
					>
						<SaveIcon />
					</Fab>
				</>
			)}
			{isLoading && (
				<>
					<CircularProgress
						size={48}
						sx={{
							color: green[500],
							position: "absolute",
							top: -6,
							left: -6,
							zIndex: 1,
						}}
					/>
				</>
			)}
		</Box>
	);
};
export default UserAction;
