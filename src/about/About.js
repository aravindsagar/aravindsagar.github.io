import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import TitleBar from './../TitleBar';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  about: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    backgroundImage: 'url("/static/images/bg.png")',
    backgroundRepeat: "repeat",
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.about}>
          <TitleBar {...this.props}/>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
