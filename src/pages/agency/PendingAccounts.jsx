import { Box, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useContext, useMemo } from "react";
import useAgencyStyles from "../../components/agency/agency";

import AccountsDataGrid from "../../components/AccountsDataGrid";
import Loading from "../../components/Loading";
import NoContent from "../../components/NoContent";
import PageError from "../../components/PageError";
import useFetch from "../../useFetch";
import { UserState } from "../../userContext";
import UpdateError from "../ministry/pages/utils/updateErrorDisplay";
import UserAction from "../ministry/pages/utils/UserActions";
import DeleteUser from "../ministry/pages/utils/DeleteUser";
import authFetch from "../../authFetch";
import ConfirmDelete from "../../components/ConfirmDelete";

const PENDING_ACC_URL = "/user/accounts/view";
const AccStatus = ["pending", "active"];

const UPDATE_MIGRANT_URL = "/user/accounts/update";
const DELETE_MIGRANT_URL = `/user/accounts/delete`;

const PendingAccounts = () => {
  const { user } = useContext(UserState);
  const classes = useAgencyStyles();
  const rowsOptions = [5, 10, 15, 25, 50];
  const [pageSize, setPageSize] = useState(rowsOptions[0]);
  const [rowIdsToBeDeleted, setRowIdsToBeDeleted] = useState([]);

  const [updateError, setUpdateError] = useState({
    msg: "",
    isOpen: false,
  });
  const [rowId, setRowId] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [param, setParam] = useState(false);

  const handleDelete = async () => {
    console.log("clik", param);
    try {
      const resp = await authFetch.delete(DELETE_MIGRANT_URL, {
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
        field: `firstname`,
        headerName: " First Name",
        flex: 1,
        editable: true,
        hideable: false,
        headerClassName: "dataGridHeader",
      },
      {
        field: `lastname`,
        headerName: "Last Name",
        flex: 1,
        editable: true,
        hideable: false,
        headerClassName: "dataGridHeader",
      },
      {
        field: `email`,
        headerName: " Email",
        flex: 1,
        editable: true,
        hideable: false,
        headerAlign: "left",
        valueFormatter: (params) => params.value.toLowerCase(),
        headerClassName: "dataGridHeader",
      },
      {
        field: `phone`,
        headerName: "Phone",
        flex: 1,
        editable: true,
        hideable: false,
        editable: true,
        headerClassName: "dataGridHeader",
      },
      {
        field: `passport`,
        headerName: "Passport",
        flex: 1,
        editable: true,
        headerClassName: "dataGridHeader",
      },
      {
        field: `accountStatus`,
        headerName: "Account Status",
        flex: 1,
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
        flex: 1,
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
              setParam,
              setConfirmOpen,
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

  let rows = results.accounts;

  const DeleteRow = (rowIdsToBeDeleted) => {
    return rows.filter((row) => {
      return !rowIdsToBeDeleted.find((rowId) => rowId === row._id);
    });
  };

  console.log(rowIdsToBeDeleted);

  if (!rowIdsToBeDeleted.length <= 0) rows = DeleteRow(rowIdsToBeDeleted);

  console.log(results.accounts);
  console.log(results);

  return (
    <>
      <ConfirmDelete onDialog={deleteParam} open={confirmOpen} />
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
          width: "100%",
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
