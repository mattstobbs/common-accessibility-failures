import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/shift-away.css';
import Description from './description';
import MoreDetails from './more-details';
import CodeSnippet from './code-snippet';
import Example from './example';
import dogs from '../static/running-dogs.jpg';
import cow from '../static/highland-cattle.jpg';
import bricks from '../static/brick-wall.jpg';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  backgroundImage: {
    display: 'block',
    backgroundImage: `url(${cow})`,
    backgroundSize: 'contain',
    '&::before': {
      paddingBottom: '100%',
      content: 'close-quote',
      display: 'inline-block',
    },
  },
  tippyContainer: {
    width: '100%',
    maxWidth: 200,
  },
  tippy: {
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
  },
}));

const ToolTip = ({ children, by, unsplash }) => {
  const classes = useStyles();

  return (
    <div className={classes.tippyContainer}>
      <Tippy
        className={classes.tippy}
        content={
          <span>
            Photo by <Link href={by.url}>{by.name}</Link> on{' '}
            <Link href={unsplash}>Unsplash</Link>
          </span>
        }
        interactive
        theme="light-border"
        duration="500"
        animation="shift-away"
      >
        {children}
      </Tippy>
    </div>
  );
};

const MissingAltText = ({ accessibility }) => {
  const classes = useStyles();

  return (
    <>
      <Description>Images should have alternative text.</Description>
      <Example>
        <ToolTip
          by={{
            name: 'Alvan Nee',
            url:
              'https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          }}
          unsplash="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          {accessibility ? (
            <img
              className={classes.image}
              src={dogs}
              alt="white and brown corgi besides brown dog"
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img className={classes.image} src={dogs} />
          )}
        </ToolTip>
        <ToolTip
          by={{
            name: 'Mark de Jong',
            url:
              'https://unsplash.com/@mrmarkdejong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          }}
          unsplash="https://unsplash.com/s/photos/highland-cattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          {accessibility ? (
            <div
              className={classes.backgroundImage}
              aria-label="a highland cattle licking its nose"
            />
          ) : (
            <div className={classes.backgroundImage} />
          )}
        </ToolTip>
        <ToolTip
          by={{
            name: 'Patrick Tomasso',
            url:
              'https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          }}
          unsplash="https://unsplash.com/s/photos/background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          {accessibility ? (
            <img
              id="decorative-image"
              className={classes.image}
              src={bricks}
              alt=""
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img id="decorative-image" className={classes.image} src={bricks} />
          )}
        </ToolTip>
      </Example>
      <CodeSnippet>
        {`
    <img${
      accessibility ? ' alt="white and brown corgi besides brown dog"' : ''
    } />

    <div class="cool-background-image"${
      accessibility ? ' aria-label="a highland cattle licking its nose"' : ''
    } />

    <img id="decorative-image"${accessibility ? ' alt=""' : ''} />
    `}
      </CodeSnippet>
      <MoreDetails
        links={['https://dequeuniversity.com/rules/axe/3.5/image-alt']}
      />
    </>
  );
};

export default MissingAltText;
