import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";

import PropTypes from "prop-types";
import ProfileList from "./ProfileList";

const drawerWidth = 240;

const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar(props) {
  const { handleDrawerOpen, handleDrawerClose, open, theme, handleActiveOn } =
    props;

  const [profileDropdown, setProfileDropdown] = React.useState(false);
  const [dashboardDropdown, setDashboardDropdown] = React.useState(false);

  const handleProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };

  const handleDashboardClick = () => {
    setDashboardDropdown(!dashboardDropdown);
  };

  const onClick = (event) => {
    handleActiveOn();
    handleDrawerClose();
  };

  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "#2B2B2F" },
        },
      })}
    >
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <DrawerHeader>
          <ListItemButton component="a" href="#customized-list">
            <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="FireAdmin"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItemButton>
          <IconButton onClick={onClick}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={handleProfileClick}>
              <Avatar
                alt="joji"
                src="/static/images/joji.png"
                sx={{ width: 24, height: 24, mr: "15px" }}
              />
              <ListItemText
                primary="Aung Htet Myat"
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
              />
              {open && (profileDropdown ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={profileDropdown} timeout="auto" unmountOnExit>
              <ProfileList />
            </Collapse>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={handleDashboardClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Inbox"
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
              />
              {open && (dashboardDropdown ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={dashboardDropdown} timeout="auto" unmountOnExit>
              {data.map((item) => (
                <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              ))}
            </Collapse>
          </ListItem>
        </List>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  handleActiveOn: PropTypes.func,
  theme: PropTypes.func,
};
