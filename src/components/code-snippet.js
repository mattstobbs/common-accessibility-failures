import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ children }) => (
  <SyntaxHighlighter
    customStyle={{ marginBottom: '40px' }}
    language="html"
    style={tomorrow}
  >
    {children}
  </SyntaxHighlighter>
);

export default CodeSnippet;
