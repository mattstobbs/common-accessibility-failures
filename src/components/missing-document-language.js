import React from 'react';
import Description from './description';
import CodeSnippet from './code-snippet';
import MoreDetails from './more-details';

const MissingDocumentLanguage = ({ accessibility }) => (
  <>
    <Description>
      The language of the page should be identified using the HTML lang
      attribute.
    </Description>
    <CodeSnippet>
      {`
    <html${accessibility ? ' lang="en"' : ''}>
    </html>
    `}
    </CodeSnippet>
    <MoreDetails
      links={['https://dequeuniversity.com/rules/axe/3.5/html-has-lang']}
    />
  </>
);

export default MissingDocumentLanguage;
