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
import AgencyLayout from "./components/agency/AgencyLayout";
import CreateMigrantAccount from "./pages/agency/createMigrantAccount";
import MigrantAccounts from "./pages/agency/migrantsAccounts";
import AgencyComplaints from "./pages/agency/AgencyComplaints";
import TestingView from "./components/TestingView";
import SingleComplaint from "./components/SingleComplaint";
import PendingAccounts from "./pages/migrant/pages/PendingAccounts";
import PendingProtected from "./pages/PendingProtected";
import MigrantPro from "./components/migrants/complaint/Profile";
import VideoRec from "./components/migrants/complaint/VideoRec";
import AudioRecording from "./components/migrants/complaint/AudioRec";
import MigrantComplaints from "./components/migrants/complaint/Complaints";
import SearchComplaint from "./components/migrants/myComplaint/SearchComplaint";
import MigrantLayout from "./components/migrants/myComplaint/Layout";
import "react-h5-audio-player/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Testing routes here */}
          <Route path="video" element={<MigrantComplaints />} />
          <Route path="complaint" element={<MigrantLayout />} />
          <Route path="pro" element={<MigrantPro />} />

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
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="mycomplaints" element={<MyComplaints />} />
          </Route>
          <Route
            path="/ministry/dashboard"
            element={
              <AdminProtectedRoute>
                <MinistryDash />
              </AdminProtectedRoute>
            }
          >
            {/* <Route index element={<CreateUser />} /> */}
            <Route path="create" element={<CreateUser />} />
            <Route path="accounts" element={<Accounts />} />
          </Route>
          <Route path="/test" element={<SingleComplaint />} />
          <Route path="/test/view" element={<TestingView />} />
          <Route
            path="/agency"
            element={
              <AdminProtectedRoute>
                <AgencyLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AgencyComplaints />} />
            <Route path="complaints/:complaintId" element={<TestingView />} />
            <Route path="create" element={<CreateMigrantAccount />} />
            <Route path="accounts" element={<MigrantAccounts />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
