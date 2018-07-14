import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  bigAvatar: {
    width: 90,
    height: 90,
    margin: 20,
  },

  avatar: {
    padding: 0,
    margin: 0
  },

  socialRoot: {
    flexFlow: "row wrap",
  },

  chip: {
    margin: theme.spacing.unit,
  },

  titleRoot: {
    flex: '1 400px',
  },

  title: {
    marginBottom: 8,
  },
});

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Avatar
              alt="Aravind Sagar"
              src="/static/images/aravind.jpg"
              className={classes.bigAvatar}
            />
            <div className={classes.titleRoot}>
              <Typography variant="title" color="inherit" className={classes.title}>
                Aravind Sagar
              </Typography>
              { this.state.width > 600 &&
              <Typography variant="subtitle" color="inherit" >
                Master's student at University of Illinois, Urbana-Champaign
              </Typography>
              }
            </div>

            <div className={classes.socialRoot}>
              <Chip
                avatar={<Avatar src="/static/images/github.png" className={classes.avatar}/>}
                label={this.state.width > 600 ? "Github" : "G"}
                onClick={(() => window.open("http://github.com/aravindsagar/"))}
                className={classes.chip}
              />
              <Chip
                avatar={<Avatar src="/static/images/linkedin.png" className={classes.avatar}/>}
                label={this.state.width > 600 ? "LinkedIn" : "L"}
                onClick={(() => window.open("https://www.linkedin.com/in/aravind-sagar-65015a5a/"))}
                className={classes.chip}
              />
              <Chip
                avatar={<Avatar src="/static/images/facebook.png" className={classes.avatar}/>}
                label={this.state.width > 600 ? "Facebook" : "F "}
                onClick={(() => window.open("https://www.facebook.com/aravind.sagar"))}
                className={classes.chip}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TitleBar);