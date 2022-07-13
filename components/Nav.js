import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import BreadcrumbsComponent from "./BreadcrumbsComponent";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";
import PropTypes from "prop-types";
import { Breadcrumbs } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: {
//             main: '#1976d2',
//         },
//     },
// });

export default function Nav(props) {
  const { handleDrawerOpen, open, handleActiveOff } = props;

  const onClick = (event) => {
    handleDrawerOpen();
    handleActiveOff();
  };

  return (
    <ThemeProvider theme={createTheme({
      components: {
        MuiListItemButton: {
          defaultProps: {
            disableTouchRipple: true,
          },
        },
      },
      palette: {
        mode: 'dark',
        primary: { main: 'rgb(102, 157, 246)' },
        background: { paper: '#2B2B2F' },
      },
    })}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <BreadcrumbsComponent />
          </Typography>
          <SearchInput />
          <NavMenu />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

Nav.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  handleActiveOff: PropTypes.func,
};
