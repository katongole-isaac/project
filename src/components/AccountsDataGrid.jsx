import { grey } from "@mui/material/colors";
import { gridClasses } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

const AccountsDataGrid = ({
  columns,
  rows,
  isLoading,
  pageSize,
  setPageSize,
  rowsOptions,
  setRowId,
}) => {
  return (
    <>
      <DataGrid
        columns={columns}
        rows={rows}
        loading={isLoading}
        autoHeight
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={rowsOptions}
        getRowSpacing={(param) => ({
          top: param.isFirstVisible ? 0 : 5,
          bottom: param.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`&.${gridClasses.row}`]: {
            bgcolor: grey[200],
          },
          height: "100%",
        }}
        getRowId={(row) => row._id}
        onCellEditCommit={(param) => setRowId(param.id)}
        getRowClassName={(param) => `style-${param.row.status}`}
      />
    </>
  );
};

export default AccountsDataGrid;
