import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import userService from "../services/UsersService";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
    paddingRight: "1rem",
  },
  authButtons: {
    marginLeft: "auto",
  },

  registerButton: {
    marginLeft: "10px",
  },
}));

const TopMenu = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        <div className={classes.authButtons}>
          {!userService.isLoggedIn() ? (
            <>
              <Button
                variant="contained"
                color="primary"
                to="/login"
                onClick={(e) => {
                  props.history.push("/login");
                }}
                className={classes.link}
              >
                Login
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                to="/register"
                onClick={(e) => {
                  props.history.push("/register");
                }}
                className={(classes.link, classes.registerButton)}
              >
                Register
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
              className={classes.link}
            >
              Logout{" "}
              {userService.getLoggedInUser().name +
                " " +
                userService.getLoggedInUser().role}
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(TopMenu);
