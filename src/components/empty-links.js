import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import Description from './description';
import MoreDetails from './more-details';
import CodeSnippet from './code-snippet';
import Example from './example';

const EmptyLinks = ({ accessibility }) => (
  <>
    <Description>
      Links without text should be described using the aria-label attribute.
    </Description>
    <Example>
      {accessibility ? (
        <a
          href="https://twitter.com/matt_stobbs"
          aria-label="Visit our twitter page"
        >
          <TwitterIcon />
        </a>
      ) : (
        <a href="https://twitter.com/matt_stobbs">
          <TwitterIcon />
        </a>
      )}
    </Example>
    <CodeSnippet>
      {`
    <a href="..."${accessibility ? ' aria-label="Visit our twitter page"' : ''}>
      <twitter-icon />
    </a>
    `}
    </CodeSnippet>
    <MoreDetails
      links={['https://dequeuniversity.com/rules/axe/3.5/link-name']}
    />
  </>
);

export default EmptyLinks;
