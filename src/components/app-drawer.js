import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'classnames';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 240,
    backgroundColor: theme.palette.background.level1,
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(3)}px`,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const AppDrawItem = ({ to, children }) => {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <ListItem disableGutters className={classes.item}>
      <Button
        component={Link}
        to={to}
        className={clsx(classes.button, { [classes.active]: to === pathname })}
        disableTouchRipple
      >
        {children}
      </Button>
    </ListItem>
  );
};

const AppDrawer = ({ className, mobileOpen, onClose, onOpen, pages }) => {
  const classes = useStyles();

  const drawer = (
    <List>
      {pages.map(({ linkText, title, href }) => (
        <AppDrawItem key={title} to={href}>
          {linkText || title}
        </AppDrawItem>
      ))}
    </List>
  );

  return (
    <nav className={className} aria-label="Main navigation">
      <Hidden lgUp>
        <SwipeableDrawer
          classes={{
            paper: classes.paper,
          }}
          disableBackdropTransition
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.paper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default AppDrawer;
