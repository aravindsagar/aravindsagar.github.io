import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AndroidIcon from '@material-ui/icons/Android';
import CommentIcon from '@material-ui/icons/Comment';
import PortraitIcon from '@material-ui/icons/Portrait';
import {Link, withRouter} from "react-router-dom";

const styles = theme => ({
  cardRoot: {
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: 200,
    height: 200,
    margin: 40,
    // backgroundColor: '#ffffff',
    boxShadow: '0 3px 10px 0 rgba(0,0,0,.5)',
    borderRadius: 10,
  },

  cardImg: {
    width: 100,
    height: 100,
    margin: theme.spacing.unit,
    color: '#ffffff',
  },

  cardText: {
    color: '#ffffff',
  }
});

function IndexCard(props) {
  const { classes } = props;
  return (
    <ButtonBase className={classes.card} style={props.colorStyle} onClick={props.onClick}>
      <CardContent>
        {props.children}
        <Typography variant="headline" component="h2" className={classes.cardText}>
          {props.title}
        </Typography>
        </CardContent>
    </ButtonBase>
  )
}

const aboutStyle = {
  backgroundColor: '#0d47a1',
};
const appsStyle = {
  backgroundColor: '#bf360c',
};
const contactStyle = {
  backgroundColor: '#558b2f',
};

function IndexCards(props) {
  const { classes } = props;
  const ICard = withStyles(styles)(IndexCard);
  const AboutCard = withRouter(({ history }) => (
    <ICard title="About me" colorStyle={aboutStyle} onClick={() => history.push('/about')}>
      <PortraitIcon className={classes.cardImg}/>
    </ICard>
  )),
    AndroidCard = withRouter(({ history }) => (
      <ICard title="Android apps" colorStyle={appsStyle} onClick={() => history.push('/about')}>
        <AndroidIcon className={classes.cardImg}/>
      </ICard>
    )),
    ContactCard = withRouter(({ history }) => (
      <ICard title="Contact" colorStyle={contactStyle} onClick={() => history.push('/about')}>
        <CommentIcon className={classes.cardImg}/>
      </ICard>
    ));
  return (
    <div className={classes.cardRoot}>
      <AboutCard/>
      <AndroidCard/>
      <ContactCard/>
    </div>
  )
}

export default withStyles(styles)(IndexCards);
