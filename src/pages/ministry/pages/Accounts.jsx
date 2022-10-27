import { Grid, Typography, Box, Container } from "@mui/material";

import { useMemo, useState } from "react";
import Loading from "../../../components/Loading";
import { useMinistryStyles } from "../../../ministry";
import useFetch from "../../../useFetch";
import UserAction from "./utils/UserActions";
import Chip from "@mui/material/Chip";
import UpdateError from "./utils/updateErrorDisplay";
import AccountsDataGrid from "../../../components/AccountsDataGrid";
import NoContent from "../../../components/NoContent";
import DeleteUser from "./utils/DeleteUser";
import PageError from "../../../components/PageError";
import ConfirmDelete from "../../../components/ConfirmDelete";
import authFetch from "../../../authFetch";

const AGENCY_ACCOUNTS_URL = `http://localhost:3001/api/agency/accounts`;
const UPDATE_AGENCY_URL = "/agency/account/update";
const DELETE_AGENCY_URL = `/agency/account/delete`;

const Accounts = () => {
  const { errorDetails, isLoading, results } = useFetch(AGENCY_ACCOUNTS_URL);
  const rowsOptions = [5, 10, 15, 25, 50];
  const [pageSize, setPageSize] = useState(rowsOptions[0]);
  const [updateError, setUpdateError] = useState({
    msg: "",
    isOpen: false,
  });

  const [confirmDel, setConfirmDel] = useState(false);
  const [rowIdsToBeDeleted, setRowIdsToBeDeleted] = useState([]);
  const [deleteError, setDeleteError] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [param, setParam] = useState(null);

  const [rowId, setRowId] = useState(null);

  const AccStatus = ["Active", "Closed"];

  const handleDelete = async () => {
    console.log("clik", param);
    try {
      const resp = await authFetch.delete(DELETE_AGENCY_URL, {
        data: { id: param },
      });
      if (resp.status >= 200 && resp.status <= 299) {
        setRowIdsToBeDeleted((prev) => [...prev, resp.data.id]);
        setConfirmOpen(false);
      }
    } catch (ex) {
      setDeleteError(true);
      setConfirmDel(false);
      setConfirmOpen(false);
    }
  };

  const deleteParam = (choose) => {
    if (choose) handleDelete();
    else {
      setConfirmOpen(false);
    }
  };

  const columns = useMemo(() => {
    return [
      {
        field: `name`,
        headerName: "Agency Name",
        flex: 1,
        editable: true,
        hideable: false,
        headerAlign: "left",
        headerClassName: "dataGridHeader",
      },
      {
        field: `email`,
        headerName: "Agency Email",
        flex: 1,
        editable: true,
        hideable: false,
        headerAlign: "left",
        valueFormatter: (params) => params.value.toLowerCase(),
        headerClassName: "dataGridHeader",
      },
      {
        field: `phone`,
        headerName: "Agency Phone",
        flex: 1,
        editable: true,
        hideable: false,
        editable: true,
        headerAlign: "left",
        headerClassName: "dataGridHeader",
      },
      {
        field: `location`,
        headerName: "Location",
        flex: 1,
        editable: true,
        headerAlign: "left",
        headerClassName: "dataGridHeader",
      },
      {
        field: `status`,
        headerName: "Account Status",
        flex: 1,
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
        flex: 1,
        headerAlign: "left",
        headerClassName: "dataGridHeader",
      },
      {
        field: "action",
        headerName: "Action",
        flex: 1,
        type: "actions",
        headerClassName: "dataGridHeader",

        renderCell: (param) => (
          <UserAction
            {...{ param, rowId, setRowId, setUpdateError, UPDATE_AGENCY_URL }}
          />
        ),
      },
      {
        field: "delete",
        headerName: "Delete",
        type: "actions",
        flex: 1,
        headerClassName: "dataGridHeader",

        renderCell: (param) => (
          <DeleteUser
            {...{
              param,
              setConfirmOpen,
              setParam,
            }}
          />
        ),
      },
    ];
  }, [rowId]);

  const classes = useMinistryStyles();

  if (isLoading) return <Loading />;

  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  if (results.accounts.length === 0)
    return (
      <NoContent
        msg="No Accounts available"
        addAccount={true}
        pathToAddAccPage="/ministry/dashboard/accounts"
      />
    );

  let rows = results.accounts;

  const DeleteRow = (rowIdsToBeDeleted) => {
    return rows.filter((row) => {
      return !rowIdsToBeDeleted.find((rowId) => rowId === row._id);
    });
  };
  console.log(rowIdsToBeDeleted, param);

  if (!rowIdsToBeDeleted.length <= 0) rows = DeleteRow(rowIdsToBeDeleted);

  const more = [
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
  ];
  rows = more;

  return (
    <>
      <Container sx={{ minHeight: "100%", height: "100%" }} maxWidth={false}>
        <ConfirmDelete
          open={confirmOpen}
          setOpen={setConfirmOpen}
          setConfirmDel={setConfirmDel}
          onDialog={deleteParam}
        />
        <UpdateError {...{ updateError, setUpdateError }} />

        <Box sx={{ m: 1 }}>
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
        </Box>
      </Container>
    </>
  );
};

export default Accounts;
