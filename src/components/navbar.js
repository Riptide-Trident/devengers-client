import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar className="nav-container">
            <Fragment>
              <Button color="inherit" component={Link} to="/">
                HOME
              </Button>
              <Button color="inherit" component={Link} to="/login">
                LOGIN
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                SIGNUP
              </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
}


export default Navbar;
