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
      <a
        href="https://twitter.com/matt_stobbs"
        {...(accessibility ? { 'aria-label': 'Visit our twitter page' } : {})}
      >
        <TwitterIcon color="primary" />
      </a>
    </Example>
    <CodeSnippet>
      {`
    <a href="..."${accessibility ? ' aria-label="Visit our twitter page"' : ''}>
      <twitter-icon />
    </a>
    `}
    </CodeSnippet>
    <MoreDetails
      links={[
        'https://blog.scottlogic.com/2020/07/02/6-most-common-accessibility-problems.html#empty-links-and-empty-buttons',
        'https://dequeuniversity.com/rules/axe/3.5/link-name',
      ]}
    />
  </>
);

export default EmptyLinks;
