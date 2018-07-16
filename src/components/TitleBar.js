import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    height: 'auto',
    position: 'fixed',
    width: '100%',
    zIndex: 10,
  },

  bigAvatar: {
    width: 90,
    height: 90,
    margin: 20,
  },

  conciseAvatar: {
    width: 50,
    height: 50,
    margin: 10,
  },

  socialRootDesktop: {
    flexFlow: "row wrap",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  chip: {
    margin: theme.spacing.unit,
  },

  titleRoot: {
    flex: '1 400px',
  },

  title: {
    marginBottom: 8,
    marginTop: 8,
  },

  desktopHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  mobileHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

class TitleBar extends Component {

  render() {
    const {classes} = this.props;
    const subheadingVisible = !this.props.concise;
    const socialData = {
      github: {
        avatar: <Avatar src="/static/images/github.png" className={classes.avatar} key='Github'/>,
        url: "http://github.com/aravindsagar/",
        label: 'Github',
      },
      linkedin: {
        avatar: <Avatar src="/static/images/linkedin.png" className={classes.avatar} key='LinkedIn'/>,
        url: "https://www.linkedin.com/in/aravind-sagar-65015a5a/",
        label: 'LinkedIn',
      },
      facebook: {
        avatar: <Avatar src="/static/images/facebook.png" className={classes.avatar} key='Facebook'/>,
        url: "https://www.facebook.com/aravind.sagar",
        label: 'Facebook',
      },
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            {this.props.onDrawerIconClick != null &&
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.props.onDrawerIconClick}
                className={classes.desktopHide}
              >
                <MenuIcon />
              </IconButton>
            }
            <Link to='/'>
              <Avatar
                alt="Aravind Sagar"
                src="/static/images/aravind.jpg"
                className={this.props.concise ? classes.conciseAvatar : classes.bigAvatar}
              />
            </Link>
            <div className={classes.titleRoot}>
              <Typography variant="title" color="inherit" className={classes.title}>
                Aravind Sagar
              </Typography>
              {subheadingVisible &&
              <Typography variant="subheading" color="inherit" className={classes.mobileHide}>
                Master's student at University of Illinois, Urbana-Champaign
              </Typography>
              }
            </div>

            <div className={classes.socialRootDesktop}>
              <Chip
                avatar={socialData.github.avatar}
                label={socialData.github.label}
                onClick={(() => window.open(socialData.github.url))}
                className={classes.chip}
              />
              <Chip
                avatar={socialData.linkedin.avatar}
                label={socialData.linkedin.label}
                onClick={(() => window.open(socialData.linkedin.url))}
                className={classes.chip}
              />
              <Chip
                avatar={socialData.facebook.avatar}
                label={socialData.facebook.label}
                onClick={(() => window.open(socialData.facebook.url))}
                className={classes.chip}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TitleBar.propTypes = {
  concise: PropTypes.bool,
  onDrawerIconClick: PropTypes.func,
};

TitleBar.defaultProps = {
  concise: false,
};

export default withStyles(styles)(TitleBar);