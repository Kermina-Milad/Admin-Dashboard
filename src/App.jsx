import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens, useMode } from "./Theme";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
import MainDashboard from "./components/MainDashboard";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [theme, colorMode] = useMode(); // Use the custom hook

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={colorMode.toggleColorMode} /> */}
        {/* <MainDashboard/> */}
        {/* <Login/> */}
        <Outlet />
        {/* <SideBar open={open} handleDrawerClose={handleDrawerClose} /> */}
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
          {/* <DrawerHeader /> */}
         {/* <Outlet/> */}
        {/* </Box> */}
      </Box>
    // </ThemeProvider>
  );
}