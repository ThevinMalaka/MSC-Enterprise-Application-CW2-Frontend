import * as React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { userLogoutRequest } from "../../views/login/actions";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogoutRequest());
    navigate("/login");

    // refresh the page
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile View
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Fitness Tracker
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{ color: "#fff" }}
          >
            <NavLink
              to="/"
              activeClassName="active"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Fitness Tracker
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to="/" activeClassName="active">
              <Button style={{ marginRight: 30 }} sx={{ color: "#fff" }}>
                Home
              </Button>
            </NavLink>
            <NavLink to="/workout" activeClassName="active">
              <Button style={{ marginRight: 30 }} sx={{ color: "#fff" }}>
                Workout
              </Button>
            </NavLink>
            <NavLink to="/weight" activeClassName="active">
              <Button style={{ marginRight: 30 }} sx={{ color: "#fff" }}>
                Weight
              </Button>
            </NavLink>
            <NavLink to="/cheat-meal" activeClassName="active">
              <Button style={{ marginRight: 30 }} sx={{ color: "#fff" }}>
                Cheat Meal
              </Button>
            </NavLink>
            <NavLink to="/prediction" activeClassName="active">
              <Button style={{ marginRight: 30 }} sx={{ color: "#fff" }}>
                Prediction
              </Button>
            </NavLink>
            <NavLink to="/report" activeClassName="active">
              <Button style={{ marginRight: 30 }} sx={{ color: "#fff" }}>
                Report
              </Button>
            </NavLink>
            <NavLink activeClassName="active">
              <Button
                style={{ marginRight: 30 }}
                onClick={() => {
                  handleLogout();
                }}
                sx={{ color: "#fff" }}
              >
                Log Out
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
