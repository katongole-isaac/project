const { red, blue, orange, grey } = require("@mui/material/colors");

const colorsForComplaintStatus = (status) => {
  switch (status) {
    case "pending":
      return blue[400];
    case "seen":
      return grey[500];
    case "workedUpon":
      return orange[500];
    case "fowarded":
      return red[100];
    case "closed":
      return red[700];
    default:
      break;
  }
};

module.exports.colorsForComplaintStatus = colorsForComplaintStatus;
