import { Grid, Typography, Box } from "@mui/material";

import { useMemo, useState } from "react";
import Loading from "../../../components/Loading";
import { useMinistryStyles } from "../../../ministry";
import useFetch from "../../../useFetch";
import UserAction from "./utils/UserActions";
import Chip from "@mui/material/Chip";
import UpdateError from "./utils/updateErrorDisplay";
import AccountsDataGrid from "../../../components/AccountsDataGrid";

const AGENCY_ACCOUNTS_URL = `http://localhost:3001/api/agency/accounts`;
const UPDATE_AGENCY_URL = "/agency/account/update";

const Accounts = () => {
	const { error, isLoading, results } = useFetch(AGENCY_ACCOUNTS_URL);
	const rowsOptions = [5, 10, 15, 25, 50];
	const [pageSize, setPageSize] = useState(rowsOptions[0]);
	const [updateError, setUpdateError] = useState({
		msg: "",
		isOpen: false,
	});

	const [rowId, setRowId] = useState(null);

	const AccStatus = ["Active", "Closed"];

	const columns = useMemo(() => {
		return [
			{
				field: `name`,
				headerName: "Agency Name",
				width: 200,
				editable: true,
				hideable: false,
				headerAlign: "left",
				headerClassName: "dataGridHeader",
			},
			{
				field: `email`,
				headerName: "Agency Email",
				width: 260,
				editable: true,
				hideable: false,
				headerAlign: "left",
				valueFormatter: (params) => params.value.toLowerCase(),
				headerClassName: "dataGridHeader",
			},
			{
				field: `phone`,
				headerName: "Agency Phone",
				width: 200,
				editable: true,
				hideable: false,
				editable: true,
				headerAlign: "left",
				headerClassName: "dataGridHeader",
			},
			{
				field: `location`,
				headerName: "Location",
				width: 150,
				editable: true,
				headerAlign: "left",
				headerClassName: "dataGridHeader",
			},
			{
				field: `status`,
				headerName: "Account Status",
				width: 150,
				type: "singleSelect",
				valueOptions: ["Active", "Closed"],
				editable: true,
				headerAlign: "left",
				headerClassName: "dataGridHeader",
				renderCell: (param) => {
					if (param.value === AccStatus[0])
						return (
							<Chip
								label={`${param.value}`}
								variant="outlined"
								color="success"
							/>
						);

					if (param.value === AccStatus[1])
						return (
							<Chip
								variant="outlined"
								label={`${param.value}`}
								color="error"
								size="small"
								sx={{ mr: 1 }}
							/>
						);
				},
			},

			{
				field: `createdAt`,
				headerName: "Date of Creation",
				width: 200,
				headerAlign: "left",
				headerClassName: "dataGridHeader",
			},
			{
				field: "action",
				headerName: "Action",
				type: "actions",
				headerClassName: "dataGridHeader",

				renderCell: (param) => (
					<UserAction
						{...{ param, rowId, setRowId, setUpdateError, UPDATE_AGENCY_URL }}
					/>
				),
			},
		];
	}, [rowId]);

	const classes = useMinistryStyles();
	// console.log(results);

	if (isLoading) return <Loading />;

	if (results.accounts.length === 0) {
		return (
			<>
				<Grid container sx={{ height: "90vh" }} justifyContent="center">
					<Grid item xs={8} alignSelf="center" textAlign="center">
						<Typography variant="h3">No Accounts Founds</Typography>
					</Grid>
				</Grid>
			</>
		);
	}

	const rows = results.accounts;

	return (
		<div className={classes.page}>
			<UpdateError {...{ updateError, setUpdateError }} />
			<Typography variant="h5" align="center">
				Local Recruitment Agencies Accounts
			</Typography>
			<Box
				className={classes.dataGrid}
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
				}}
			>
				<AccountsDataGrid
					columns={columns}
					rows={rows}
					isLoading={isLoading}
					pageSize={pageSize}
					setPageSize={setPageSize}
					setRowId={setRowId}
					rowsOptions={rowsOptions}
				/>
			</Box>
		</div>
	);
};

export default Accounts;
