import React, { Suspense } from 'react';
import NavBar from './containers/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ProtectedRoute from './containers/ProtectedRoute';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const FormSignIn = React.lazy(() => import('./pages/FormSignIn'));
const SingleTweet = React.lazy(() => import('./pages/SingleTweet'));
const New = React.lazy(() => import('./pages/New'));

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/signin" component={FormSignIn} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/new" component={New} />
            <Route path="/tweets/:id" component={SingleTweet} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
