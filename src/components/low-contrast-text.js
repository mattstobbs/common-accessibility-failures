import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'classnames';
import Description from './description';
import MoreDetails from './more-details';
import CodeSnippet from './code-snippet';
import Example from './example';

const useStyles = makeStyles((theme) => ({
  highContrastBackground: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  lowContrastBackground: {
    background: '#808DD1',
    color: '#F2F2F2',
  },
  exampleText: {
    ...theme.typography.h4,
    fontSize: 30,
  },
}));

const LowContrastText = ({ accessibility }) => {
  const classes = useStyles();

  return (
    <>
      <Description>
        Text elements should have a high colour contrast against the background.
      </Description>
      <Example
        className={clsx(
          classes.background,
          { [classes.highContrastBackground]: accessibility },
          { [classes.lowContrastBackground]: !accessibility }
        )}
      >
        <Typography variant="h2" component="h2" className={classes.exampleText}>
          Hello World
        </Typography>
      </Example>
      <CodeSnippet>
        {`
    <style>
        .hello-world {
          ${
            accessibility
              ? `color: #fff;
          background: #3f51b5;`
              : `color: #f2f2f2;
          background: #808dd1;`
          }
        }
    <style>

    <div class="hello-world">Hello World</div>
    `}
      </CodeSnippet>
      <MoreDetails
        links={['https://dequeuniversity.com/rules/axe/3.5/color-contrast']}
      />
    </>
  );
};

export default LowContrastText;
