import { makeStyles } from "@mui/styles";

const useComplaintStyle = makeStyles({
  commentContainer: {
    display: "flex",
    padding: 2,
    height: "10%",
    borderRadius: "10px",
    backgroundColor: "#FAFAFA",
  },
  commentContent: {
    flexGrow: 1,
    padding: 1,
    backgroundColor: "palevioletred",
  },
  commentBio: {
    padding: 1,
    flexBasis: "45%",
  },
});

export default useComplaintStyle;
