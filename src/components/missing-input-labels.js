import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Description from './description';
import MoreDetails from './more-details';
import CodeSnippet from './code-snippet';
import Example from './example';

const useStyles = makeStyles({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const accessibleCodeSnippet = `
<label>Name<input /></label>

<label for="name">Name</label>
<input id="name" />

<div id="name">Name</div>
<input aria-labelledby="name" />
`;

const inaccessibleCodeSnippet = `
<label>Name</label>
<input />

<label>Name</label>
<input />

<div>Name</div>
<input />
`;

const MissingInputLabels = ({ accessibility }) => {
  const classes = useStyles();

  return (
    <>
      <Description>{'Form <input> elements must have labels.'}</Description>
      <Example>
        {accessibility ? (
          <>
            <label className={classes.inputContainer}>
              Name
              <input />
            </label>

            <div className={classes.inputContainer}>
              <label htmlFor="name2">Name</label>
              <input id="name2" />
            </div>

            <div className={classes.inputContainer}>
              <div id="name3">Name</div>
              <input aria-labelledby="name3" />
            </div>
          </>
        ) : (
          <>
            <div className={classes.inputContainer}>
              <label>Name</label>
              <input />
            </div>

            <div className={classes.inputContainer}>
              <label>Name</label>
              <input />
            </div>

            <div className={classes.inputContainer}>
              <div>Name</div>
              <input />
            </div>
          </>
        )}
      </Example>
      <CodeSnippet>
        {accessibility ? accessibleCodeSnippet : inaccessibleCodeSnippet}
      </CodeSnippet>
      <MoreDetails
        links={['https://dequeuniversity.com/rules/axe/3.5/label']}
      />
    </>
  );
};

export default MissingInputLabels;
