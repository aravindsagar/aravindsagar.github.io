import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
  app: {
    minHeight: "100%",
    flex: 1,
    height: 'auto',
    fontFamily: "sans-serif",
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
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