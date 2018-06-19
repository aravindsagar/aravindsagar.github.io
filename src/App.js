import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import TitleBar from './TitleBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IndexCards from './IndexCards';

const styles = theme => ({
  app: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    backgroundImage: 'url("/static/images/bg.png")',
    backgroundRepeat: "repeat",
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.app}>
          <TitleBar {...this.props}/>
          <IndexCards />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
