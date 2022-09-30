import { Box } from "@mui/material";
import Popup from "reactjs-popup";
const Modal = ({ btnRef }) => {
	return (
		<>
			<Popup modal trigger={btnRef}>
				<Box sx={{ backgroundColor: "black" }}>
					<p>Model COntent</p>
				</Box>
			</Popup>
		</>
	);
};

export default Modal;
