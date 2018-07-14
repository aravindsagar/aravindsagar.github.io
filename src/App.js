import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./about/About";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
  app: {
    display: "flex",
    minHeight: "100%",
    flex: 1,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
          </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);