import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dash from "./pages/Dash";
import { Dashboard } from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Complaint from "./pages/migrant/pages/Complaint";
import MyComplaints from "./pages/migrant/pages/MyComplaints";
// import Profile from "./pages/migrant/pages/Profile";

import { ProtectedRoute, AdminProtectedRoute } from "./pages/ProtectedRoute";
import SignUp from "./pages/Signup";
import MinistryDash from "./components/ministry/MinistryDash";
import StopWatch from "./pages/stopwatch";
import Accounts from "./pages/ministry/pages/Accounts";
import CreateUser from "./pages/ministry/pages/CreateUser";
import { AgencyLayout } from "./components/agency/AgencyLayout";
import CreateMigrantAccount from "./pages/agency/createMigrantAccount";
import MigrantAccounts from "./pages/agency/migrantsAccounts";
import AgencyComplaints from "./components/agency/AgencyComplaints";
import SingleComplaint from "./components/SingleComplaint";
import PendingAccounts from "./pages/migrant/pages/PendingAccounts";
import PendingProtected from "./pages/PendingProtected";
import ChangePassword from "./components/migrants/complaint/ChangePassword";
import VideoRec from "./components/migrants/complaint/VideoRec";
import MigrantComplaints from "./components/migrants/complaint/Complaints";
import MigrantLayout from "./components/migrants/myComplaint/Layout";
import "react-h5-audio-player/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ProfileLayout from "./components/generalProfile/ProfileLayout";
import AgencyPaperAccount from "./pages/ministry/pages/AgencyPageAccount";
import AgencyProfile from "./pages/agency/AgencyProfile";
import AgencyComplaintsLayout from "./pages/agency/AgencyComplaintsLayout";
import { SingleComplaintView } from "./components/singleComplaintView/SingleComplaintView";
import LetterPDFView from "./components/singleComplaintView/LetterPDFView";
import { UserContext } from "./userContext";
import ComplaintEditor from "./components/Editor/ComplaintEditor";
import MinistryLetterComplaint from "./pages/ministry/pages/MinistryLetterComplaints";
import MinistryStatistics from "./pages/ministry/pages/Statistics";
import ClosedAccounts from "./pages/ClosedAccounts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContext>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="/accounts/closed" element={<ClosedAccounts />} />
            </Route>

            {/* Testing routes here */}
            <Route path="general" element={<ProfileLayout />} />
            <Route path="complaint" element={<MigrantLayout />} />
            <Route path="pro" element={<ChangePassword />} />
            <Route path="/editor" element={<ComplaintEditor />} />
            <Route path="/test/view" element={<SingleComplaintView />} />
            <Route path="videor" element={<VideoRec />} />
            {/* Testing routes here */}

            <Route path="*" element={<Error />} />
            <Route path="accounts/pending" element={<PendingAccounts />} />
            <Route path="ministry" element={<MinistryDash />}>
              <Route index element={<StopWatch />} />
            </Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<MigrantComplaints />} />
              <Route path="profile" element={<ProfileLayout />} />
              <Route path="mycomplaints" element={<MigrantLayout />} />
            </Route>
            <Route
              path="/ministry/dashboard"
              element={
                <AdminProtectedRoute>
                  <MinistryDash />
                </AdminProtectedRoute>
              }
            >
              <Route index element={<MinistryStatistics />} />
              <Route path="accounts" element={<AgencyPaperAccount />} />
              <Route path="complaint" element={<MinistryLetterComplaint />} />
              <Route path="create" element={<CreateUser />} />
              <Route
                path="complaints/:complaintId"
                element={<SingleComplaintView />}
              />
            </Route>

            <Route
              path="/agency"
              element={
                <AdminProtectedRoute>
                  <AgencyLayout />
                </AdminProtectedRoute>
              }
            >
              <Route index element={<AgencyComplaintsLayout />} />
              <Route
                path="complaints/:complaintId"
                element={<SingleComplaintView />}
              />
              <Route path="create" element={<CreateMigrantAccount />} />
              <Route path="accounts" element={<MigrantAccounts />} />
              <Route path="profile" element={<AgencyProfile />} />
            </Route>
          </Routes>
        </Router>
      </UserContext>
    </ThemeProvider>
  );
}

export default App;
