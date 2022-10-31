import { Box } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import { useContext } from "react";
import LetterPDF from "./LetterPDF";
import { SingleComplaintContext } from "./SingleComplaintView";

export default function LetterPDFView({ letterText }) {
  const { user, res } = useContext(SingleComplaintContext);

  return (
    <Box sx={{ height: "100vh" }}>
      <PDFViewer width={"100%"} height="100%">
        <LetterPDF user={user} res={res} letterText={letterText} />
      </PDFViewer>
    </Box>
  );
}
