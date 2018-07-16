import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TitleBar from '../components/TitleBar';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Scrollspy from 'react-scrollspy';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { HashLink as Link } from 'react-router-hash-link';

const styles = theme => ({
  about: {
    display: "flex",
    flexFlow: "column",
    minHeight: "100%",
    height: 'auto',
    backgroundImage: 'url("/static/images/bg.png")',
    backgroundRepeat: "repeat",
    width: 'auto',
    marginTop: 70,
    marginLeft: 240,
    padding: 20,
  },
  drawerContainer: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  currentDrawerItem: {
    background: '#ccdcef'
  },
  drawerList: {
    listStyleType: 'none',
    color: '#000',
    margin: 0,
    padding: 0
  },
  drawerListItem: {
    textDecoration: 'none',
  }
});

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {mobileOpen: false};
  }

  toggleDrawer = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {classes} = this.props;
    const drawerItems = (
      <Scrollspy
        items={ ['section-1', 'section-2', 'section-3'] }
        currentClassName={classes.currentDrawerItem}
        className={classes.drawerList}
      >
        <li>
          <Link smooth to='/about#section-1' hash='section-1' className={classes.drawerListItem}>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox"/>
            </ListItem>
          </Link>
        </li>

        <li>
          <Link smooth to='/about#section-2' hash='section-2' className={classes.drawerListItem}>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </Link>
        </li>
        <li>
          <Link smooth to='/about#section-3' hash='section-3' className={classes.drawerListItem}>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </Link>
        </li>
      </Scrollspy>
    );
    return (
      <React.Fragment>
        <CssBaseline/>
        <TitleBar
          concise
          onDrawerIconClick={this.toggleDrawer}
        />
        <div>
            <ResponsiveDrawer
              className={classes.drawer}
              mobileOpen={this.state.mobileOpen}
              toggleDrawer={this.toggleDrawer}
              drawerItems={drawerItems}
            />
          <div className={classes.about}>
            <section id="section-1">section 1</section>
            <section id="section-2"><img src='/static/images/aravind.jpg' /> </section>
            <section id="section-3">section 3</section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
