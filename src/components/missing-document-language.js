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
      links={[
        'https://blog.scottlogic.com/2020/07/02/6-most-common-accessibility-problems.html#missing-document-language',
        'https://dequeuniversity.com/rules/axe/3.5/html-has-lang',
      ]}
    />
  </>
);

export default MissingDocumentLanguage;
