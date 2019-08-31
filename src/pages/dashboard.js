import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {TextField} from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";



import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  block1: {
    backgroundColor: "#00bcd4",
    height:"990px",
    marginTop:"-100px",
    marginLeft:"-330px",
    marginRight:"-400px"
  },
  block2:{
      marginLeft:"500px",

  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    position: "relative"
  },
};

class DashBoard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container fluid spacing={0} justify="left">
          <Grid item sm={9} xs={12} className={classes.block1}>
            <h1>Hello</h1>
          </Grid>
          <Grid item sm={3} xs={12} className={classes.block2}>
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form  onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              onChange={this.handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
              {/* {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )} */}
            </Button>
            <br />
            <small>
              dont have an account? sign up <Link to="/signup">here</Link>
            </small>
          </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DashBoard);
