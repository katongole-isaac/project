import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import useAgencyStyles from "./agency";
import { Box } from "@mui/material";
import { useState } from "react";
import Person3Icon from "@mui/icons-material/Person3";

const AgencySideNav = () => {
  const classes = useAgencyStyles();
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("currentPage") || "Complaints"
  );
  localStorage.setItem("currentPage", activeLink);

  const navLink = [
    {
      name: "Complaints",
      path: "/agency",
    },
    {
      name: "Add Migrant",
      path: "/agency/create",
    },
    {
      name: "Accounts",
      path: "accounts",
    },
    {
      name: "Profile",
      path: "profile",
    },
  ];

  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box sx={{ height: "100%", backgroundColor: "#003d5b" }}>
          <Box sx={{ height: "10%" }}></Box>
          <AgencyList
            navLink={navLink}
            classes={classes}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default AgencySideNav;

const AgencyList = ({ navLink, classes, activeLink, setActiveLink }) => {
  return (
    <>
      <List>
        {navLink.map((link) => {
          return (
            <>
              <ListItem
                disablePadding
                key={link.name}
                className={[
                  classes.listItem,
                  activeLink === link.name ? classes.activeLink : "",
                ]}
                onClick={() => setActiveLink(link.name)}
              >
                <Link to={link.path} className={classes.sideInnerLinks}>
                  <ListItemButton>
                    {link.name === "Complaints" && (
                      <ListItemIcon>
                        <TextSnippetIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                    )}
                    {link.name === "Add Migrant" && (
                      <ListItemIcon>
                        <PersonAddIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                    )}
                    {link.name === "Accounts" && (
                      <ListItemIcon>
                        <LocalPostOfficeIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                    )}
                    {link.name === "Profile" && (
                      <ListItemIcon>
                        <Person3Icon sx={{ color: "white" }} />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
};
