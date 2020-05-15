import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { usePageTitle } from '../utils/usePageTitle';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 40,
    margin: '16px 0',
  },
}));

const Title = () => {
  const pageTitle = usePageTitle();
  const classes = useStyles();

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Typography
      className={classes.title}
      variant="h3"
      component="h1"
      gutterBottom
    >
      {pageTitle}
    </Typography>
  );
};

export default Title;
