import { Box, Typography } from "@mui/material";
import useAgencyStyles from "../../agency";
import { Grid } from "@mui/material";

import { useMemo, useState } from "react";
import React from "react";
import Chip from "@mui/material/Chip";
import AccountsDataGrid from "../../components/AccountsDataGrid";
import UpdateError from "../ministry/pages/utils/updateErrorDisplay";
import UserAction from "../ministry/pages/utils/UserActions";
import useFetch from "../../useFetch";
import { useMinistryStyles } from "../../ministry";
import Loading from "../../components/Loading";
import { useContext } from "react";
import { UserState } from "../../userContext";
import PageError from "../../components/PageError";
import NoContent from "../../components/NoContent";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PendingAccounts from "./PendingAccounts";
import ActiveAccounts from "./ActiveAccounts";

const MigrantContext = React.createContext();

const MIGRANT_ACCOUNTS_URL = `/user/accounts/view`;
const noContentMsg = "No Accounts Found";
const accountStatus = "active";
const AccStatus = ["active", "closed"];

const MigrantAccounts = () => {
	const { user } = useContext(UserState);
	const classes = useAgencyStyles();

	const { error, errorDetails, isLoading, results } = useFetch(
		`${MIGRANT_ACCOUNTS_URL}?name=${user.name}&status=${accountStatus}`
	);
	const rowsOptions = [5, 10, 15, 25, 50];
	const [pageSize, setPageSize] = useState(rowsOptions[0]);
	const [updateError, setUpdateError] = useState({
		msg: "",
		isOpen: false,
	});

	const [rowId, setRowId] = useState(null);

	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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
				valueOptions: ["active"],
				editable: true,
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
				field: "action",
				headerName: "Action",
				type: "actions",
				headerClassName: "dataGridHeader",

				renderCell: (param) => (
					<UserAction {...{ param, rowId, setRowId, setUpdateError }} />
				),
			},
		];
	}, [rowId]);

	if (isLoading) return <Loading />;

	if (Object.keys(errorDetails).length !== 0) return <PageError />;

	console.log(errorDetails);
	if (results.accounts === "undefined" || results.accounts.length === 0)
		return <NoContent msg={noContentMsg} />;

	const rows = results.accounts;

	console.log(results.accounts);

	return (
		<>
			<UpdateError {...{ updateError, setUpdateError }} />
			<Typography variant="h5" align="center">
				Migrant Workers
			</Typography>
			<div>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Active" value="1" />
							<Tab label="Pending" value="2" />
							{/* <Tab label="Item Three" value="3" /> */}
						</TabList>
					</Box>
					<TabPanel value="1">
						<ActiveAccounts />
						{/* <Box
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
						</Box> */}
					</TabPanel>
					<TabPanel value="2">
						<PendingAccounts />
					</TabPanel>
					<TabPanel value="3">Item Three</TabPanel>
				</TabContext>
			</div>
		</>
	);
};

export default MigrantAccounts;
