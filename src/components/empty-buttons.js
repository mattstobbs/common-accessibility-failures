import React from 'react';
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
      {accessibility ? (
        <IconButton color="primary" aria-label="Share on Twitter">
          <TwitterIcon />
        </IconButton>
      ) : (
        <IconButton color="primary">
          <TwitterIcon />
        </IconButton>
      )}
    </Example>
    <CodeSnippet>
      {`
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
