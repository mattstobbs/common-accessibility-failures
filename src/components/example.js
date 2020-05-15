import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'classnames';

const useStyles = makeStyles((theme) => ({
  heading: {
    ...theme.typography.h4,
    fontSize: 30,
    margin: '40px 0 16px',
  },
  example: {
    outline: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: theme.spacing(3),
    border: `1px solid ${fade(theme.palette.action.active, 0.12)}`,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    background: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
  },
}));

const Example = ({ className, children }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" component="h2" className={classes.heading}>
        Example
      </Typography>
      <div className={clsx(classes.example, className)}>{children}</div>
    </>
  );
};

export default Example;
