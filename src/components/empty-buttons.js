import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import Description from './description';
import MoreDetails from './more-details';
import CodeSnippet from './code-snippet';
import Example from './example';

const EmptyButtons = ({ accessibility }) => (
  <>
    <Description>
      Buttons without text should be described using the aria-label attribute.
    </Description>
    <Example>
      <>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          {...(accessibility ? { 'aria-label': 'Add a playlist' } : {})}
        >
          +
        </Button>
        <IconButton
          color="primary"
          {...(accessibility ? { 'aria-label': 'Share on Twitter' } : {})}
        >
          <TwitterIcon />
        </IconButton>
      </>
    </Example>
    <CodeSnippet>
      {`
    <button${accessibility ? ' aria-label="Add a playlist"' : ''}>+</button>

    <button${accessibility ? ' aria-label="Share on Twitter"' : ''}>
      <twitter-icon />
    </button>
    `}
    </CodeSnippet>
    <MoreDetails
      links={['https://dequeuniversity.com/rules/axe/3.5/button-name']}
    />
  </>
);

export default EmptyButtons;
