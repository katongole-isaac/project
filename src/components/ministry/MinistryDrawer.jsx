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
import { useMinistryStyles } from "../../ministry";
import { Stack } from "@mui/system";

const MinistryDrawer = () => {
  const classes = useMinistryStyles();
  const navLink = [
    {
      name: "Complaints",
      path: "/ministry/dashboard",
      icon: `${(<LocalPostOfficeIcon />)}`,
    },
    {
      name: "Create Account",
      path: "/ministry/dashboard/create",
      icon: `${(<LocalPostOfficeIcon />)}`,
    },
    {
      name: "Accounts",
      path: "accounts",
      icon: `${(<LocalPostOfficeIcon />)}`,
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
        <Box sx={{ height: "100%", backgroundColor: "#003d5b" }}>
          <Box sx={{ height: "10%" }}></Box>
          <List>
            {navLink.map((link) => {
              return (
                <ListItem disablePadding key={link.name}>
                  <Link to={link.path} className={classes.link}>
                    <ListItemButton>
                      {link.name === "Complaints" && (
                        <ListItemIcon>
                          <TextSnippetIcon />
                        </ListItemIcon>
                      )}
                      {link.name === "Create Account" && (
                        <ListItemIcon>
                          <PersonAddIcon />
                        </ListItemIcon>
                      )}
                      {link.name === "Accounts" && (
                        <ListItemIcon>
                          <LocalPostOfficeIcon />
                        </ListItemIcon>
                      )}
                      <ListItemText primary={link.name} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MinistryDrawer;
