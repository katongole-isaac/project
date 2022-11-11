import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";
import { useStyles, drawerWidth } from "../../styles";
import { useMinistryStyles } from "./ministry";
import { Stack } from "@mui/system";
import { useState } from "react";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import CourtOfArms from "../../images/coatOfArms.png";

const MinistryDrawer = () => {
  const classes = useMinistryStyles();
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("currentPage") || "Dashboard"
  );
  localStorage.setItem("currentPage", activeLink);

  const navLink = [
    {
      name: "Dashboard",
      path: "/ministry/dashboard",
    },
    {
      name: "Complaints",
      path: "/ministry/dashboard/complaint",
    },
    {
      name: "Create Account",
      path: "/ministry/dashboard/create",
    },
    {
      name: "Accounts",
      path: "accounts",
    },
  ];
  return (
    <div>
      <Drawer
        anchor="left"
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.paperDrawer,
        }}
      >
        <Box sx={{ height: "100%", backgroundColor: "#0081a7" }}>
          <Box sx={{ height: "20%", p: 1 }}>
            <img src={CourtOfArms} width="90%" height="90%" />
          </Box>
          <MinistryNavList
            navLink={navLink}
            classes={classes}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default MinistryDrawer;

const MinistryNavList = ({ navLink, classes, activeLink, setActiveLink }) => {
  return (
    <>
      <List>
        {navLink.map((link) => {
          return (
            <ListItem
              disablePadding
              key={link.name}
              className={[
                classes.listItem,
                activeLink === link.name ? classes.activeLink : "",
              ]}
              onClick={() => setActiveLink(link.name)}
            >
              <Link to={link.path} className={classes.link}>
                <ListItemButton>
                  {link.name === "Complaints" && (
                    <ListItemIcon>
                      <TextSnippetIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                  )}
                  {link.name === "Create Account" && (
                    <ListItemIcon>
                      <PersonAddIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                  )}
                  {link.name === "Accounts" && (
                    <ListItemIcon>
                      <LocalPostOfficeIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                  )}
                  {link.name === "Dashboard" && (
                    <ListItemIcon>
                      <StackedLineChartIcon sx={{ color: "#FFF" }} />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={link.name} sx={{ color: "#FFF" }} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
