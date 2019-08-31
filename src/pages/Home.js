import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/navbar";

import { connect } from "react-redux";

export class Home extends Component {
  // componentDidMount() {
  //   this.props.getScreams();
  // }
  render() {
    // const { screams, loading } = this.props.data;
    // let recentScreamsMarkup = !loading ? (
    //   screams.map(scream => <Scream scream={scream} key={scream.id} />)
    // ) : (
    //   <p>Loading...</p>
    // );
    return (
      <div>
        <Navbar />
        <Grid container spacing={10}>
          <Grid item sm={8} xs={12}>
            <h1>Hello</h1>
          </Grid>
          <Grid item sm={4} xs={12}>
            <h1>There</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   data: state.data
// });

// export default connect(
//   mapStateToProps,
//   { getScreams }
// )(Home);

export default Home;
