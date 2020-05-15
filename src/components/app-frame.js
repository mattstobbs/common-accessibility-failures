import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppDrawer from './app-drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: 240,
    },
  },
  grow: {
    flex: '1 1 auto',
  },
}));

const AppFrame = ({ pages, children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open main navigation"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <Tooltip title="Github repository" enterDelay={300}>
            <IconButton
              component="a"
              color="inherit"
              href="https://github.com/mattstobbs/common-accessibility-failures"
              aria-label="Github repository"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <AppDrawer
        className={classes.drawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        mobileOpen={mobileOpen}
        pages={pages}
      />
      {children}
    </div>
  );
};

export default AppFrame;
