const { Alert, Typography } = require("@mui/material");

const ClosedAccounts = () => {
  return (
    <>
      <Alert severity="error">
        <Typography variant="body2">
          {" "}
          This account has been temporarily closed by Ministry. Please visit the
          Ministry Headquarters for more infomation. Thanks
        </Typography>
      </Alert>
    </>
  );
};

export default ClosedAccounts;
