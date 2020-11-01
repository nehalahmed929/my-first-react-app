import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
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
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
