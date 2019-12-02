// Core
import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
// Components
import AppBarComponent from '../../components/AppBarComponent/AppBarComponent';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
// Constants
import { routing } from '../../engine/config/routes/routing';
// Pages
const AboutPage = lazy(() => import('../../pages/About/About'));
const HomePage = lazy(() => import('../../pages/Home/Home'));
const Page404 = lazy(() => import('../../pages/Page404/Page404'));
const TodosPage = lazy(() => import('../../pages/Todos/Todos'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path={routing.home}>
          <AppBarComponent title="My First React App">
            <Main />
          </AppBarComponent>
        </Route>
      </Switch>
    </Router>
  );
}

function Main() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();
  // URLs
  const about = `${path}${routing.about}`;
  const error404 = `${path}${routing.error404}`;
  const errorPage = `${url}${routing.error404}`;
  const todoPage = `${path}${routing.todos}`;
  const loginPage = `${path}${routing.login}`;

  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path={path} component={HomePage} />
        <Route path={about} component={AboutPage} />
        <Route exact path={error404} component={Page404} />
        <Route exact path={todoPage} component={TodosPage} />
        <Route exact path={loginPage} component={LoginPage} />
        <Redirect to={errorPage} />
      </Switch>
    </ErrorBoundary>
  );
}

function User() {
  const { user } = useParams();
  // const ref = React.createRef(); // Текущая реализация
  // const ref1 = React.useRef(); // Текущая реализация на хуках

  return (
    <div>
      <Link to="/">About</Link>
      <br />
      User {user}
    </div>
  );
}

export default Routing;
