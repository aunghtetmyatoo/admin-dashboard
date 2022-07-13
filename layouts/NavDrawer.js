import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Accodian from "../components/Accodian";
import Dashboard from "../pages/admin/dashboard";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function NavDrawer({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [active, setActive] = React.useState(false);

    const handleDrawerOpen = () => {
        active === true ? setOpen(true) : {};
    };

    const handleDrawerClose = () => {
        active === true ? setOpen(false) : {};
    };

    const handleActiveOn = () => {
        setOpen(false);
        setActive(true);
    };

    const handleActiveOff = () => {
        setActive(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Nav
                handleDrawerOpen={handleDrawerOpen}
                open={open}
                active={active}
                handleActiveOff={handleActiveOff}
            />
            <Sidebar
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                open={open}
                theme={theme}
                active={active}
                handleActiveOn={handleActiveOn}
            />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
