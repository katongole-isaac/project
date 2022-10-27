import { Box, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useContext, useMemo } from "react";
import useAgencyStyles from "../../agency";
import AccountsDataGrid from "../../components/AccountsDataGrid";
import Loading from "../../components/Loading";
import NoContent from "../../components/NoContent";
import PageError from "../../components/PageError";
import useFetch from "../../useFetch";
import { UserState } from "../../userContext";
import UpdateError from "../ministry/pages/utils/updateErrorDisplay";
import UserAction from "../ministry/pages/utils/UserActions";

const PENDING_ACC_URL = "/user/accounts/view";
const AccStatus = ["pending", "active"];

const UPDATE_MIGRANT_URL = "/user/accounts/update";

const PendingAccounts = () => {
	const { user } = useContext(UserState);
	const classes = useAgencyStyles();
	const rowsOptions = [5, 10, 15, 25, 50];
	const [pageSize, setPageSize] = useState(rowsOptions[0]);
	const [updateError, setUpdateError] = useState({
		msg: "",
		isOpen: false,
	});
	const [rowId, setRowId] = useState(null);

	const columns = useMemo(() => {
		return [
			{
				field: `firstname`,
				headerName: " First Name",
				width: 200,
				editable: true,
				hideable: false,
				headerClassName: "dataGridHeader",
			},
			{
				field: `lastname`,
				headerName: "Last Name",
				width: 200,
				editable: true,
				hideable: false,
				headerClassName: "dataGridHeader",
			},
			{
				field: `email`,
				headerName: " Email",
				width: 260,
				editable: true,
				hideable: false,
				headerAlign: "left",
				valueFormatter: (params) => params.value.toLowerCase(),
				headerClassName: "dataGridHeader",
			},
			{
				field: `phone`,
				headerName: "Phone",
				width: 200,
				editable: true,
				hideable: false,
				editable: true,
				headerClassName: "dataGridHeader",
			},
			{
				field: `passport`,
				headerName: "Passport",
				width: 150,
				editable: true,
				headerClassName: "dataGridHeader",
			},
			{
				field: `accountStatus`,
				headerName: "Account Status",
				width: 150,
				type: "singleSelect",
				valueOptions: ["active", "pending"],
				editable: true,
				headerClassName: "dataGridHeader",
				renderCell: (param) => {
					if (param.value === AccStatus[0])
						return (
							<Chip label={`${param.value}`} variant="outlined" color="info" />
						);
					if (param.value === AccStatus[1])
						return (
							<Chip
								label={`${param.value}`}
								variant="outlined"
								color="success"
							/>
						);
				},
			},

			{
				field: "action",
				headerName: "Action",
				type: "actions",
				headerClassName: "dataGridHeader",

				renderCell: (param) => (
					<UserAction
						{...{
							param,
							rowId,
							setRowId,
							setUpdateError,
							UPDATE_AGENCY_URL: UPDATE_MIGRANT_URL,
						}}
					/>
				),
			},
		];
	}, [rowId]);
	const noContentMsg = "No Pending Accounts";
	const accountStatus = "pending";
	const url = `${PENDING_ACC_URL}?name=${user.name}&status=${accountStatus}`;
	const { errorDetails, isLoading, results } = useFetch(url);

	if (isLoading) return <Loading />;

	if (Object.keys(errorDetails).length !== 0) return <PageError />;

	console.log(errorDetails);
	if (results.accounts === "undefined" || results.accounts.length === 0)
		return <NoContent msg={noContentMsg} />;

	const rows = results.accounts;

	console.log(results.accounts);
	console.log(results);
	return (
		<>
			<Box
				sx={{
					"& .style-Active": {
						bgcolor: "#eeeeee",
					},
					"& .style-Closed": {
						bgcolor: "#ef9a9a",
						" &:hover": {
							bgcolor: "#ffcdd2",
						},
					},
					display: "flex",
					width: `calc(100vw - 240px);`,
				}}
			>
				<UpdateError {...{ updateError, setUpdateError }} />

				<div className={classes.dataGrid}>
					<AccountsDataGrid
						columns={columns}
						rows={rows}
						isLoading={isLoading}
						pageSize={pageSize}
						setPageSize={setPageSize}
						setRowId={setRowId}
						rowsOptions={rowsOptions}
					/>
				</div>
			</Box>
		</>
	);
};

export default PendingAccounts;
