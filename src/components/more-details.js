import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    wordWrap: 'break-word',
  },
});

const MoreDetails = ({ links }) => {
  const classes = useStyles();

  return (
    <>
      <Typography>For more information, visit: </Typography>
      <ul>
        {links.map((link) => (
          <li>
            <Typography>
              <Link className={classes.link} key={link} href={link}>
                {link}
              </Link>
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoreDetails;
