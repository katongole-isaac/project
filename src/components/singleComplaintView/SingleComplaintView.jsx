import {
  Container,
  Box,
  Button,
  Typography,
  Divider,
  Grid,
  Tooltip,
} from "@mui/material";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Stack } from "@mui/system";
import { makeStyles } from "@mui/styles";
import useFetch from "../../useFetch";
import Loading from "../Loading";
import PageError from "../PageError";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Editor from "../Editor";
import { Masonry } from "@mui/lab";
import ReactHtmlParser from "react-html-parser";
import ComplaintHeader from "./complaintHeader";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import ComplaintTitleSection from "./ComplaintTitleSection";
import ComplaintBioInfo from "./ComplaintBioInfo";
import VideoComplaintView from "./VideoComplaintView";
import AudioComplaintView from "./AudioComplaintView";
import TextComplaintView from "./TextComplaintView";
import StyledMuiButon from "../Styled/StyledMuiButton";
import LetterSection from "./LetterSection";
import { UserState } from "../../userContext";
import ComplaintEditor from "../Editor/ComplaintEditor";
import CommentSection from "./CommentSection";
import { StyledTooltip } from "../Styled/StyledTooltip";
import AddedComment from "./AddedComment";
import SnackBarLetter from "../SnackBarLetter";

const noContentMsg = "No content available";
const SingleComplaintContext = React.createContext();

const useTestingView = makeStyles({
  bioNav: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 5px",
  },
  complaintTitle: {
    margin: 10,
  },
});

const COMPLAINT_URL = `/complaints/views/`;

const SingleComplaintView = ({ audioUrl, videoUrl, desc }) => {
  const { user } = useContext(UserState);

  const [isMinistry, setIsMinistry] = useState(user?.username ? true : false); //checking if its a ministry account

  const { complaintId } = useParams();
  const [pageErrorMsg, setPageErrorMsg] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [onError, setOnError] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [onLetterSend, setOnLetterSend] = useState(false);
  const [onLetterError, setOnLetterError] = useState(false);

  const [comment, setComment] = useState({
    msg: "",
    date: null,
    author: "",
  });
  const [_comment, _setComment] = useState([]); // for displaying the date after being saved

  const { isLoading, errorDetails, results, error } = useFetch(
    `${COMPLAINT_URL}${complaintId}`
  );
  const [showEditor, setShowEditor] = useState(false);
  const handleClick = () => {
    setShowEditor((prev) => !prev);
  };

  const [letter, setLetter] = useState("");

  const classes = useTestingView();

  useEffect(() => {
    if (errorDetails.code === "ERR_BAD_REQUEST") {
      setPageErrorMsg(errorDetails.response.data.error);
    } else if (errorDetails.code === "ERR_NETWORK") {
      setPageErrorMsg(errorDetails.message);
    }
  }, [errorDetails]);

  let load = true;
  if (isLoading) return <Loading />;

  if (Object.keys(errorDetails).length !== 0)
    return <PageError msg={pageErrorMsg} path="../" />;

  const { res, profilePic, comments } = results;
  console.log(onLetterError);
  return (
    <>
      <SingleComplaintContext.Provider
        value={{
          res,
          classes,
          profilePic,
          user,
          comments,
          _comment,
          isMinistry,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FAFAFA",
            minHeight: "91vh",
          }}
        >
          <SnackBarLetter
            onLetterSend={onLetterSend}
            setOnLetterSend={setOnLetterSend}
            onLetterError={onLetterError}
          />
          <Container sx={{ height: "100%" }}>
            <Box>
              <LetterSection
                open={openDialog}
                setOpen={setOpenDialog}
                setOnLetterSend={setOnLetterSend}
                setOnLetterError={setOnLetterError}
              />
              <ComplaintHeader />
              <ComplaintTitleSection />
              <ComplaintBioInfo />
              <VideoComplaintView />
              <AudioComplaintView />
              <TextComplaintView />
              {comments && (
                <Button onClick={() => setShowComments(!showComments)}>
                  show Comments
                </Button>
              )}

              {showComments && <CommentSection />}
              <AddedComment />
              <ComplaintEditor
                open={showEditor}
                setComment={setComment}
                user={user}
                comment={comment}
                complaintId={complaintId}
                setOnError={setOnError}
                _setComment={_setComment}
                setShowEditor={setShowEditor}
                isMinistry={isMinistry}
              />
              <div>
                <Stack spacing={2} direction="row" sx={{ m: 1 }}>
                  <Tooltip title="reply to migrant" placement="bottom" arrow>
                    <Button
                      startIcon={<ReplyIcon />}
                      onClick={handleClick}
                      variant="outlined"
                      sx={{}}
                    >
                      Reply
                    </Button>
                  </Tooltip>

                  {/* <StyledMuiButon color="#fff" backgroundColor="palevioletred">
                  Transcribe
                </StyledMuiButon> */}

                  {/* Dont show this button if isMinistry === true */}
                  {!isMinistry && (
                    <Tooltip
                      title="forward to ministry"
                      placement="right-start"
                      arrow
                    >
                      <Button
                        startIcon={<ShortcutIcon />}
                        variant="outlined"
                        onClick={() => setOpenDialog(true)}
                      >
                        Forward
                      </Button>
                    </Tooltip>
                  )}
                </Stack>
              </div>
            </Box>
          </Container>
        </Box>
      </SingleComplaintContext.Provider>
    </>
  );
};

export { SingleComplaintView, SingleComplaintContext };
