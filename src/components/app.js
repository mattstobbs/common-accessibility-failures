import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { urls, pages } from '../utils/urls';
import Title from './title';
import AppFrame from './app-frame';
import AccessibilityToggle from './accessibility-toggle';
import LowContrastText from './low-contrast-text';
import MissingAltText from './missing-alt-text';
import EmptyLinks from './empty-links';
import MissingInputLabels from './missing-input-labels';
import EmptyButtons from './empty-buttons';
import MissingDocumentLanguage from './missing-document-language';
import Header from './header';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    outline: 0,
    position: 'relative',
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  actions: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
}));

// TODO: Add footer with link to blog
// TODO: Explanation adapted from blog (READ MORE button)
const App = () => {
  const classes = useStyles();
  const [accessibility, setAccessibility] = useState(false);

  return (
    <>
      <Router>
        <Header />
        <AppFrame pages={pages}>
          <Container
            component="main"
            maxWidth="md"
            tabIndex={-1}
            className={classes.root}
          >
            <div className={classes.actions}>
              <AccessibilityToggle
                accessibility={accessibility}
                setAccessibility={setAccessibility}
              />
            </div>
            <Title />
            <Switch>
              <Route exact path={urls.lowContrastText}>
                <LowContrastText accessibility={accessibility} />
              </Route>
              <Route exact path={urls.missingAltText}>
                <MissingAltText accessibility={accessibility} />
              </Route>
              <Route exact path={urls.emptyLinks}>
                <EmptyLinks accessibility={accessibility} />
              </Route>
              <Route exact path={urls.missingFormInputLabels}>
                <MissingInputLabels accessibility={accessibility} />
              </Route>
              <Route exact path={urls.emptyButtons}>
                <EmptyButtons accessibility={accessibility} />
              </Route>
              <Route exact path={urls.missingDocumentLanguage}>
                <MissingDocumentLanguage accessibility={accessibility} />
              </Route>
              <Route path="/">
                <Redirect to={urls.lowContrastText} />
              </Route>
            </Switch>
          </Container>
        </AppFrame>
      </Router>
    </>
  );
};

export default App;
