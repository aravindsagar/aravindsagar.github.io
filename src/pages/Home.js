import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TitleBar from '../components/TitleBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IndexCards from '../components/IndexCards';

const styles = theme => ({
  home: {
    display: "flex",
    flexFlow: "column",
    minHeight: "100%",
    backgroundImage: 'url("/static/images/bg.png")',
    backgroundRepeat: "repeat",
  }
});

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <CssBaseline/>
        <div className={classes.home}>
          <TitleBar {...this.props}/>
          <IndexCards/>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
