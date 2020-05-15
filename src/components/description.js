import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    ...theme.typography.h5,
    margin: '0 0 40px',
  },
}));

const Description = ({ children }) => {
  const classes = useStyles();

  return <Typography className={classes.description}>{children}</Typography>;
};

export default Description;
