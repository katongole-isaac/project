import UserAction from "./UserActions";

const AccStatus = ["Active", "Closed"];

const columns = [
	// {field: id, hea}
	{
		field: `name`,
		headerName: "Agency Name",
		width: 200,
		hideable: false,
		headerAlign: "left",
		headerClassName: "dataGridHeader",
	},
	{
		field: `email`,
		headerName: "Agency Email",
		width: 260,
		hideable: false,
		headerAlign: "left",
		valueFormatter: (params) => params.value.toLowerCase(),
		headerClassName: "dataGridHeader",
	},
	{
		field: `phone`,
		headerName: "Agency Phone",
		width: 200,
		hideable: false,
		headerAlign: "left",
		headerClassName: "dataGridHeader",
	},
	{
		field: `location`,
		headerName: "Location",
		width: 150,
		headerAlign: "left",
		headerClassName: "dataGridHeader",
	},
	{
		field: `status`,
		headerName: "Account Status",
		width: 150,
		headerAlign: "left",
		headerClassName: "dataGridHeader",
		renderCell: (param) => {
			if (param.value === AccStatus[0])
				return <span class="badge bg-success ">{param.value}</span>;

			if (param.value === AccStatus[1])
				return <span class="badge bg-primary ">{param.value}</span>;

			if (param.value === AccStatus[2])
				return <span class="badge bg-danger ">{param.value}</span>;
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
		type: "actions",
		renderCell: (param) => <UserAction  {...param } />,
	},
];

export { columns };
